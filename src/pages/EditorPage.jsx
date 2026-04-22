import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CodeEditor from "../components/Editor";
import { socket } from "../socket";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:5000/api/run";

const EditorPage = () => {
  const { roomId } = useParams();

  const query = new URLSearchParams(useLocation().search);
  const username = query.get("name") || "Anonymous";

  const [code, setCode] = useState("console.log('Start coding')");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState(null);
  const [cursors, setCursors] = useState({});
  const [copied, setCopied] = useState(false); // ✅ new
  const [loading, setLoading] = useState(false);

  // Auto-save
  useEffect(() => {
    const saved = localStorage.getItem("code");
    if (saved) setCode(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("code", code);
  }, [code]);

  useEffect(() => {
    socket.emit("join-room", { roomId, username });

    socket.on("code-update", (newCode) => {
      setCode(newCode);
    });

    socket.on("cursor-update", ({ userId, username, position }) => {
      setCursors((prev) => ({
        ...prev,
        [userId]: { username, position },
      }));
    });

    socket.on("user-left", (userId) => {
      setCursors((prev) => {
        const updated = { ...prev };
        delete updated[userId];
        return updated;
      });
    });

    return () => {
      socket.off("code-update");
      socket.off("cursor-update");
      socket.off("user-left");
    };
  }, [roomId]);

  const handleChange = (newCode) => {
    setCode(newCode);

    socket.emit("code-change", {
      roomId,
      code: newCode,
    });
  };

  const handleCursorMove = (position) => {
    socket.emit("cursor-move", {
      roomId,
      username,
      position,
    });
  };

  const runCode = async () => {
    setLoading(true);

    try {
      const res = await axios.post(API_URL, {
        language,
        code,
      });

      setOutput(res.data.output);
    } catch {
      setOutput({
        output: "Execution Error",
        status: "error",
      });
    }

    setLoading(false);
  };

  // ✅ Download with Toast
  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `code.${language === "python" ? "py" : "js"}`;
    link.click();

    toast.success("Code downloaded successfully 🚀");
  };

  // ✅ Copy with button feedback
  const copyOutput = () => {
    if (!output) return;

    navigator.clipboard.writeText(output.output);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  // Language template
  const handleLanguageChange = (lang) => {
    setLanguage(lang);

    if (lang === "python") {
      setCode("print('Start coding')");
    } else {
      setCode("console.log('Start coding')");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-4">
      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={2000} />

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Room: {roomId}</h2>

        <div className="flex gap-3">
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-gray-800 px-3 py-2 rounded"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>

          <button
            onClick={runCode}
            disabled={loading}
            className={`px-4 py-2 rounded ${
              loading ? "bg-gray-600" : "bg-blue-600"
            }`}
          >
            {loading ? "Running..." : "Run"}
          </button>

          <button
            onClick={downloadCode}
            className="bg-gray-700 px-4 py-2 rounded"
          >
            Download
          </button>
        </div>
      </div>

      {/* Users */}
      <div className="mb-3">
        <h4 className="text-sm text-gray-400">Users</h4>
        {Object.values(cursors).map((c, i) => (
          <p key={i} className="text-blue-400 text-sm">
            {c.username}
          </p>
        ))}
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Editor */}
        <div className="lg:col-span-2">
          <CodeEditor
            code={code}
            onChange={handleChange}
            onCursorMove={handleCursorMove}
            remoteCursors={cursors}
            language={language}
          />
        </div>

        {/* Output */}
        <div className="bg-black p-4 rounded">
          <h3 className="mb-2">Output</h3>

          {!output ? (
            <pre className="text-gray-400">Run code</pre>
          ) : (
            <>
              <pre
                className={`whitespace-pre-wrap ${
                  output.status === "error" ? "text-red-400" : "text-green-400"
                }`}
              >
                {output.output}
              </pre>

              <p className="text-sm mt-2 text-gray-400">
                Time: {output.executionTime}
              </p>

              {/* Copy Button */}
              <button
                onClick={copyOutput}
                className={`mt-3 px-3 py-1 rounded transition ${
                  copied ? "bg-green-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {copied ? "Copied ✓" : "Copy Output"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;

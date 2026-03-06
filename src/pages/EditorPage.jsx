import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CodeEditor from "../components/Editor";
import { socket } from "../socket";

const API_URL = "http://localhost:5000/api/run";

const EditorPage = () => {
  const { roomId } = useParams();

  const query = new URLSearchParams(useLocation().search);
  const username = query.get("name") || "Anonymous";

  const [code, setCode] = useState("console.log('Start coding')");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [cursors, setCursors] = useState({});

  useEffect(() => {
    socket.emit("join-room", { roomId, username });

    socket.on("code-update", (newCode) => {
      setCode(newCode);
    });

    socket.on("cursor-update", ({ userId, username, position }) => {
      console.log("Cursor update received:", userId, position);

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
    try {
      const res = await axios.post(API_URL, {
        language,
        code,
        input: "",
      });

      setOutput(res.data.output);
    } catch {
      setOutput("Execution Error");
    }
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h3>Room: {roomId}</h3>

      <div style={{ marginBottom: "10px" }}>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>

        <button onClick={runCode} style={{ padding: "8px 20px" }}>
          Run Code
        </button>
      </div>

      <CodeEditor
        code={code}
        onChange={handleChange}
        onCursorMove={handleCursorMove}
        remoteCursors={cursors}
        language={language}
      />

      <div className="outputContainer">
        <h3>Output</h3>
        <pre>{output || "Run code to see output"}</pre>
      </div>
    </div>
  );
};

export default EditorPage;

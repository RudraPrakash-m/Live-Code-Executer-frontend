import Editor from "@monaco-editor/react";
import { useRef, useEffect } from "react";

const CodeEditor = ({
  code,
  onChange,
  onCursorMove,
  remoteCursors,
  language,
}) => {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const decorations = useRef([]);

  const handleMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    editor.onDidChangeCursorPosition((e) => {
      if (onCursorMove) {
        onCursorMove({
          lineNumber: e.position.lineNumber,
          column: e.position.column,
        });
      }
    });
  };

  useEffect(() => {
    if (!editorRef.current || !monacoRef.current) return;

    const monaco = monacoRef.current;

    const newDecorations = Object.values(remoteCursors).map((cursor) => {
      const { position } = cursor;

      return {
        range: new monaco.Range(
          position.lineNumber,
          position.column,
          position.lineNumber,
          position.column,
        ),
        options: {
          className: "remote-cursor",
        },
      };
    });

    decorations.current = editorRef.current.deltaDecorations(
      decorations.current,
      newDecorations,
    );
  }, [remoteCursors]);

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-sm text-gray-300 font-medium">Code Editor</span>
        <span className="text-xs text-gray-400 uppercase">{language}</span>
      </div>

      {/* Editor */}
      <Editor
        height="500px"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => onChange(value)}
        onMount={handleMount}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          smoothScrolling: true,
          padding: { top: 10 },
          cursorSmoothCaretAnimation: "on",
        }}
      />
    </div>
  );
};

export default CodeEditor;

import React from "react";

const Output = ({ output }) => {
  return (
    <div className="outputBox">
      <div className="outputHeader">Output</div>

      <pre className="outputText">
        {output || "Run code to see output"}
      </pre>
    </div>
  );
};

export default Output;
import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { Link } from "react-router-dom";

const CodeRunner = ({ question, onCorrectChange }) => {
  // console.log(question);
  const [code, setCode] = useState(question.code);
  const [output, setOutput] = useState([]);
  const [correct, setCorrect] = useState(Boolean);
  const [codingState, setCodingState] = useState("javascript");

  const runCode = async () => {
    let results = [];
    const log = console.log;
    try {
      // Redirect console.log to capture output
      console.log = (...args) => {
        results.push(args.join(" "));
      };
      eval(code);
      console.log = log;
    } catch (error) {
      // Restore console.log and display error
      console.log = log;
      const stackTrace = error.stack;
      const lineNumber = stackTrace.match(/<anonymous>:(\d+):\d+/)[1];
      results.push(`Error: ${error} at line ${lineNumber}`);
      // results.push(`Error: ${error}`);
    }
    let isCorrect =
      results[0] === question.answer[0] &&
      results[1] === question.answer[1] &&
      results[2] === question.answer[2];
    await setCorrect(isCorrect);
    await onCorrectChange(isCorrect);
    setOutput(results);
  };

  const onChange = (newValue) => {
    setCode(newValue);
  };

  // console.log(codingState);

  return (
    <div className="code-runner">
      <h3>{question.question}</h3>
      <div className="js-or-python">
        <span
          onClick={() => {
            setCodingState("javascript");
            setCode(question.code);
          }}
        >
          Javascript
        </span>
        <span
          style={{ marginLeft: "1rem" }}
          onClick={() => {
            setCodingState("python");
            setCode(question.codePython);
          }}
        >
          Python
        </span>
      </div>

      {codingState === "python" ? (
        <AceEditor
          style={{
            width: "100%",
            height: "40vh",
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "4px",
          }}
          mode="python"
          fontSize={16}
          theme="monokai"
          onChange={onChange}
          name="codeArea"
          setOptions={{
            enableBasicAutocompletion: true,
          }}
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      ) : (
        <AceEditor
          style={{
            width: "100%",
            height: "40vh",
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "4px",
          }}
          mode="javascript"
          fontSize={16}
          theme="monokai"
          onChange={onChange}
          name="codeArea"
          setOptions={{
            enableBasicAutocompletion: true,
          }}
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      )}
      <button className="run-button" onClick={runCode}>
        Run Code
      </button>
      <h3 style={{ margin: 0 }}>Output</h3>
      <pre className="console-output">
        <ul>
          {output.map((line, index) => (
            <li className="consoleOutput" key={index}>
              {line}
            </li>
          ))}
        </ul>
      </pre>
    </div>
  );
};

export default CodeRunner;

import React, { useState, useRef, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { Link } from "react-router-dom";

const CodeRunner = ({ question, onCorrectChange }) => {
  // console.log(question);
  const iframeRef = useRef(null);
  const [code, setCode] = useState(question.code);
  const [output, setOutput] = useState([]);
  const [correct, setCorrect] = useState(Boolean);
  const [codingState, setCodingState] = useState("javascript");
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [pythonOutput, setPythonOutput] = useState("");

  const runCode = async () => {
    let results = [];
    console.log(results);
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
      console.log(error);
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

  useEffect(() => {
    function handleMessage(event) {
      if (event.data && event.data.language && event.data.result) {
        setPythonOutput(event.data.result.output);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    console.log("Python output:", pythonOutput);
    const answers = `${question.answer[0]}\n${question.answer[1]}\n${question.answer[2]}`;
    console.log(answers);
    if (pythonOutput == answers) {
      console.log("YOU'RE RIGHT");
    }
  }, [pythonOutput]);

  useEffect(() => {
    if (codingState === "python" && iframeRef.current.contentWindow) {
      // console.log("it should trigger...");
      // console.log("question", question);
      // console.log("populate triggered");
      const code = question.codePython;
      console.log(code);
      iframeRef.current.contentWindow.postMessage(
        {
          eventType: "populateCode",
          language: "python",
          files: [
            {
              name: "main.py",
              content: code,
            },
          ],
        },
        "*"
      );
    }
  }, [codingState, isIframeLoaded]);

  const triggerRun = async (ev) => {
    await iframeRef.current.contentWindow.postMessage(
      {
        eventType: "triggerRun",
      },
      "*"
    );
  };

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
        <div>
          <iframe
            id="oc-editor"
            ref={iframeRef}
            frameBorder="0"
            height="450px"
            width="100%"
            onLoad={() => setIsIframeLoaded(true)}
            src="https://onecompiler.com/embed/python?codeChangeEvent=true&listenToEvents=true&hideLanguageSelection=true&availableLanguages=true&hideNew=true&hideNewFileOption=true&hideTitle=true&theme=dark"
          />
        </div>
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
          editorProps={{ $blockScrolling: true }}
          value={code}
        />
      )}
      {codingState === "python" ? (
        <button className="run-button" onClick={(ev) => triggerRun(ev)}>
          Run Code
        </button>
      ) : (
        <button className="run-button" onClick={runCode}>
          Run Code
        </button>
      )}
      {codingState === "javascript" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default CodeRunner;

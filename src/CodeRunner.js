import React, { useState, useRef, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { Link } from "react-router-dom";

const CodeRunner = ({ question, onCorrectChange }) => {
  const iframeRef = useRef(null);
  const [code, setCode] = useState(question.code);
  const [output, setOutput] = useState([]);
  const [codeIsCorrect, setCodeIsCorrect] = useState(false);
  const [codingState, setCodingState] = useState("javascript");
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [pythonOutput, setPythonOutput] = useState("");

  const runCode = async () => {
    let results = [];
    const log = console.log;
    try {
      console.log = (...args) => {
        results.push(args.join(" "));
      };
      eval(code);
      console.log = log;
    } catch (error) {
      console.log(error);
      console.log = log;
      const stackTrace = error.stack;
      const lineNumber = stackTrace.match(/<anonymous>:(\d+):\d+/)[1];
      results.push(`Error: ${error} at line ${lineNumber}`);
    }
    let isCorrect =
      results[0] === question.answer[0].toString() &&
      results[1] === question.answer[1].toString() &&
      results[2] === question.answer[2].toString();
    try {
      await setCodeIsCorrect(isCorrect);
      setOutput(results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setCodeIsCorrect(false);
    setCode(question.code);
  }, [question]);

  const submitCode = async () => {
    await onCorrectChange(true);
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
    const answers = `${question.answer[0]}\n${question.answer[1]}\n${question.answer[2]}`;
    console.log(answers);
    if (pythonOutput == answers) {
    }
  }, [pythonOutput]);

  useEffect(() => {
    if (codingState === "python" && iframeRef.current.contentWindow) {
      const code = question.codePython;
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
      <h4>{question.question}</h4>
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
        <>
          <button className="run-button" onClick={runCode} style={{ marginRight: "2px" }}>
            Run Code
          </button>
          <button
            disabled={codeIsCorrect === false}
            className={codeIsCorrect === false ? "disabled-run-button" : "run-button"}
            style={{ marginLeft: "2px" }}
            onClick={submitCode}
          >
            Submit Code
          </button>
          <button
            disabled={codeIsCorrect === false}
            className={codeIsCorrect === false ? "disabled-run-button" : "run-button"}
            style={{ marginLeft: "2px" }}
            onClick={submitCode}
          >
            Clear Code
          </button>
        </>
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

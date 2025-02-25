import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to upper case!", "success");
  };
  const handlelowclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lower case!", "success");
  };
  const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text Reversed!", "success");
  };
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  };
  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleonchange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1 className="py-3">{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#2F5571" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <style>
          {`
            .btn-primary:hover {
              background-color: var(--bs-success) !important;
              border-color: var(--bs-success) !important;
            }
          `}
        </style>
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center my-3 mb-3 py-3">
          <button className="btn btn-primary mx-12 my-1" onClick={handleupclick}>
            Convert to upper case
          </button>
          &nbsp;
          <button className="btn btn-primary mx-12 my-1" onClick={handlelowclick}>
            Convert to lower case
          </button>
          &nbsp;
          <button className="btn btn-primary mx-12 my-1" onClick={handleReverse}>
            Reverse the text
          </button>
          &nbsp;
          <button className="btn btn-primary mx-12 my-1" onClick={handleCopy}>
            Copy text
          </button>
          &nbsp;
          <button className="btn btn-primary mx-12 my-1" onClick={handleextraspaces}>
            Remove extra spaces
          </button>
          &nbsp;
          <button className="btn btn-primary mx-12 my-1" onClick={handleclearclick}>
            Clear text
          </button>
        </div>
      </div>
      <div
        className="container mb-10"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>YOUR TEXT SUMMARY</h1>
        <p>
          YOUR TEXT HAVE {text.split(" ").filter((element) => { return element.length !== 0 }).length} WORDS AND {text.length} CHARACTERS
        </p>
        <p>{0.008 * text.split(" ").length} MINUTES READ</p>
        <h3>PREVIEW</h3>
        <p>{text.length > 0 ? text : "ENTER SOMETHING TO PREVIEW"}</p>
      </div>
    </>
  );
}
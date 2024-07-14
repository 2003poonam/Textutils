import React, { useState, useRef } from "react";

export default function TextForm(props) {
  const textAreaRef = useRef(null);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () => {
    textAreaRef.current.select();
    navigator.clipboard.writeText(textAreaRef.current.value);
    props.showAlert("Text copied to clipboard", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className="container" 
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h4>{props.heading}</h4>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            ref={textAreaRef}
            rows="8"
          ></textarea>
          <div className="button my-3">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        </div>

        <div className="container my-3">
          <h3>Your text summary</h3>
          <p>{text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes read</p>
          <h3>Preview:</h3>
          <textarea
            className="form-control"
            value={text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
            readOnly
            rows="8"
          ></textarea>
        </div>
      </div>
    </>
  );
}
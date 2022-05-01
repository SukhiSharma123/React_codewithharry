import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = (e) => {
        e.preventDefault();
        // console.log('upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = (e) => {
        e.preventDefault();
        // console.log('upper case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnClick = (event) => {
        // console.log('Changed');

        setText(event.target.value);
        // setText(event.target.value.toUpperCase());
    }
    const [text, setText] = useState('');
    // setText("sadakdas");
    return (
        <>
            <div className='container my-3'>
                <h3>{props.heading}</h3>
                <form>
                    <div className="mb-3">
                        <textarea className='form-control' rows="8" id="myBox" value={text} onChange={handleOnClick} placeholder="enter your text here"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                </form>
            </div>
            <div className="container my-2">
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

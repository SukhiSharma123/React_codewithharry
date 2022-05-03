import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = (e) => {
        e.preventDefault();
        // console.log('upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleClearClick = (e) => {
        e.preventDefault();
        // console.log('upper case was clicked' + text);
        let newText = ('');
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

    const handleCopy = (e) => {
        e.preventDefault()
        var text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = (e) => {
        e.preventDefault()
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState('');
    // setText("sadakdas");
    return (
        <>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>{props.heading}</h3>
                <form>
                    <div className="mb-3">
                        <textarea className='form-control' rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" value={text} onChange={handleOnClick} placeholder="enter your text here"></textarea>
                    </div>
                    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Spaces</button>
                </form>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in text field to preview"}</p>
            </div>
        </>
    )
}

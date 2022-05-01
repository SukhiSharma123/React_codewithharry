import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (e) => {
        e.preventDefault();
        // console.log('upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnClick = (event) => {
        // console.log('Changed');
        
        setText(event.target.value);
        // setText(event.target.value.toUpperCase());
    }
    const [text, setText] = useState('Enter your Text');
    // setText("sadakdas");
    return (
        <div className='container my-3'>
            <h3>{props.heading}</h3>
            <form>
                <div className="mb-3">
                    <textarea className='form-control' rows="8" id="myBox" value={text} onChange={handleOnClick}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </form>
        </div>
    )
}

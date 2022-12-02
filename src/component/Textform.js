import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");

    const hendleOnClick = () => {
        // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(", Conveted to uppercase", "success");
    }
    const hendleLoClick = () => {
        // console.log("clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(", Conveted to lowercase", "success");
    }

    const hendleSetCase = () => {
        let newText = text.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());;
        setText(newText);
        props.showAlert(", Conveted to standerdcase", "success");
    }

    const hendleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert(", Text has been clear", "success");
    }

    const hendletrim = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(", Removed all speces", "success");
    }

    const hendleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
    }

    const hendleOnChange = (event) => {
        // console.log("onchange");
        setText(event.target.value)
    }


    return (
        <>
            <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : '#1a1d45' }}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#666666' : '#faf9f7', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" value={text} onChange={hendleOnChange} rows="10"></textarea>
                </div>

                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendleOnClick} >UPPERCASE</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendleLoClick} >lowercase</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendleSetCase} >Sentence Case</button>
                <button disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendletrim} >Trim</button>
                <button  disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendleCopy} >Copy Text</button>
                <button  disabled={text.length===0} type="button" className='btn btn-primary mx-1 btn-sm' onClick={hendleClear} >Clear</button>
            </div>
            <div className={`container my-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((ele) => {return ele.length!==0}).length} word and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write somthing in above to preview here."}</p>
            </div>
        </>
    )
}
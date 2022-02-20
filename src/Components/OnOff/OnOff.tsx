import React, {useState} from "react";

type OnOffType = {
    onChange: (on: boolean)=> void
}

export const OnOff = (props : OnOffType) => {

    const [on, setOn] = useState(true);

    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: on ? "white" : "red"
    };
    const indStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: on ? "green" : "red"
    };

    const onClicked = () =>{
        setOn(true)
        props.onChange(true)
    }

    const offClicked = () =>{
        setOn(false)
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={offStyle} onClick={offClicked}>Off</div>
        <div style={indStyle}></div>
    </div>
}


import React from "react";

type OnPropsType = {
    on : boolean
    setOn : (on : boolean)=> void
}

export const ControlledOnOff = (props : OnPropsType) => {
    const onStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "40px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: props.on  ? "white" : "red"
    };
    const indStyle = {
        width: "30px",
        height: "30px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        margin: "2px",
        backgroundColor: props.on  ? "green" : "red"
    };
    return <div>
        <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
        <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
        <div style={indStyle}></div>
    </div>
}


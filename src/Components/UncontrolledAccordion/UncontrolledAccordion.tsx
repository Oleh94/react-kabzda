import React, {useState} from "react";

type AccordionPropsType = {
    title: string
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false);

    const [collapsed1, setCollapsed1] = useState(false);

    return (
        <div>
            <AccordionTitle onClick={() => setCollapsed(!collapsed)} title={props.title}/>
            {collapsed ? <AccordionBody/> : null}
            <AccordionTitle1 setCollapsed1={setCollapsed1} collapsed1={collapsed1} title={props.title}/>
            {collapsed1 ? <AccordionBody/> : null}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

type AccordionTitlePropsType1 = {
    title: string
    collapsed1: boolean
    setCollapsed1:(collapsed1: boolean)=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>{props.title}</h3>
}

function AccordionTitle1(props: AccordionTitlePropsType1) {
    return <h3 onClick={()=> props.setCollapsed1(!props.collapsed1)}>{props.title}</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}


export default UncontrolledAccordion;
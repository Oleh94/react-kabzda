import React from "react";

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed : (collapsed: boolean)=>void

}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
    <div>
        <AccordionTitle title={props.title} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
        {props.collapsed ? "" : <AccordionBody/>}

        </div>
        )
    }

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed : (collapsed: boolean)=>void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={()=>props.setCollapsed(!props.collapsed)}>{props.title}</h3>
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

export default Accordion;
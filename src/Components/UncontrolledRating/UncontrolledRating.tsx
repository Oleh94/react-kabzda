import React, {useState} from "react";

export function UncontrolledRating() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} starSetValue={setValue} number={1}/>
            <Star selected={value > 1} starSetValue={setValue} number={2}/>
            <Star selected={value > 2} starSetValue={setValue} number={3}/>
            <Star selected={value > 3} starSetValue={setValue} number={4}/>
            <Star selected={value > 4} starSetValue={setValue} number={5}/>

        </div>
    )
}

type StarPropsType = {
    selected : boolean
    starSetValue: (number : number)=>void
    number: number
}

function Star(props: StarPropsType) {
    return <span onClick={()=>props.starSetValue(props.number)}>
        {props.selected ? <b>star</b> : "star"}
    </span>
}
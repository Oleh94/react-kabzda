import React, {useState} from "react";
import "./App.css";
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import Accordion from "./Components/Accordion/Accordion";
import {Select} from "./Components/Select/Select";

export type UsersType = {
    users: Array<{id : number, name: string}>
}

const Users = [
    {id : 1, name: "Oleh"},
    {id: 2, name: "Andr"},
    {id: 3, name: "Julia"},
    {id: 4, name: "Viko"}
]


function App() {
    console.log("App rendering");

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    // const [collapsed, setCollapsed] = useState(true);
    const [selectCollapsed, setSelectCollapsed] = useState(true);
    const [on, setOn] = useState(true);

    return (
        <div>
            {/*<Accordion title={"Controlled Acc"} collapsed={collapsed}*/}
            {/*       setCollapsed={setCollapsed}/>*/}
            {/*<PageTitle title={"1st page title"}/>*/}
            {/*<PageTitle title={"2nd page title"}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating ratingValue={ratingValue} setRatingValue={setRatingValue}/>

            <UncontrolledAccordion title="Accordion title 1"/>
            {/*<UncontrolledAccordion title="Accordion title 2"/>*/}
            {/*<UncontrolledRating value={5}/>*/}
            <OnOff onChange={setOn}/> {on.toString()}
            <Select selectCollapsed={selectCollapsed}
                    setSelectCollapsed={setSelectCollapsed}
                    users={Users}
            />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle (props : PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;

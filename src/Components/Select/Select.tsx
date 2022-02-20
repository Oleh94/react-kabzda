import React, {useState} from "react";
import {UsersType} from "../../App";


export type SelectPropsType = UsersType & {
    selectCollapsed: boolean
    setSelectCollapsed: (selectCollapsed: boolean) => void
}

export const Select = (props: SelectPropsType) => {
    const [title, setTitle] = useState("Simple Title");
    const onClick = (name : string) => {
        setTitle(name)
    }

    const onClickHandler = () => {
        props.setSelectCollapsed(false)
    }

    const onBlurHandler = () => {
        props.setSelectCollapsed(true)
    }
    return (
        <div>
            <h3 onClick={onClickHandler}
                onBlur={onBlurHandler}
            >{title}</h3>
            {props.selectCollapsed ? "" : <SelectBody users={props.users} onClick={onClick}/>}
        </div>
    )
}

type SelectBodyPropsType = {
    users: Array<{id : number, name: string}>
    onClick : (name : string) => void
}

const SelectBody = (props : SelectBodyPropsType) => {
    return (
        <div>
            <ul>
                {props.users.map(i => <li key={i.id} onClick={() =>props.onClick(i.name)}>{i.name}</li>)}
            </ul>
        </div>
    )
}
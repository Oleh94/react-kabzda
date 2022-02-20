import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    ratingValue : RatingValueType
    setRatingValue :(value : RatingValueType)=> void
}

export function Rating(props : RatingPropsType) {
    return (
        <div>
            <Star selected={props.ratingValue > 0} setRatingValue={()=>props.setRatingValue(1)}/>
            <Star selected={props.ratingValue > 1} setRatingValue={()=>props.setRatingValue(2)}/>
            <Star selected={props.ratingValue > 2} setRatingValue={()=>props.setRatingValue(3)}/>
            <Star selected={props.ratingValue > 3} setRatingValue={()=>props.setRatingValue(4)}/>
            <Star selected={props.ratingValue > 4} setRatingValue={()=>props.setRatingValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected : boolean
    setRatingValue :()=> void
}

function Star(props: StarPropsType) {
    return <span onClick={props.setRatingValue}> {props.selected ? <b>star</b>  : "star"} </span>
}
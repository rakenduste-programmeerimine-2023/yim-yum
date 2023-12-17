import React from "react";
import {Button} from "@mui/material";

export function KarlButton(props){
    let Style;
    if(props.variant == "outlined"){
        Style = "border-red-600 text-orange-800 hover:bg-red-600 hover:text-white";
    }
    if(props.variant == "text"){
        Style = "bg-white text-red-600";
    }

    return (
        <Button className={Style} variant={props.variant}>{props.text}</Button>
    )
}
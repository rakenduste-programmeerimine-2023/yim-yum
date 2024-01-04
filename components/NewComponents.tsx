import React from "react";
import {Button} from "@mui/material";

export function KarlButton(props){
    let Style;

    switch (props.variant) {
        case "contained":
            Style = "bg-red-600 hover:bg-red-800 text-white font-bold"
            break;
        case "outlined":
            Style = "border-red-600 text-orange-800 hover:bg-red-600 hover:text-white";
            break;
        case "smallText":
            Style = "bg-transparent text-red-600 text-sm pl-1 pr-1 mx-0 max-h-6 hover:bg-transparent";
            break;
        default:
        case "text":
            Style = "bg-transparent text-red-600 hover:bg-transparent";
            break;
    }

    return (
        <Button className={Style + " " + props.className} variant={props.variant} onClick={props.onClick}>{props.text}</Button>
    )
}
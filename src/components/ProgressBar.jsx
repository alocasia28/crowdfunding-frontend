import React from "react";

import "./ProgressBar.css/"
// should this be a let or a const
export let ProgressBar = ({currentValue, maxValue}) => 
    <progress value={currentValue} max={maxValue}>{currentValue}%</progress>;



// // should this be a let or a const
// export let ProgressBar = ({currentValue, maxValue}) => {
//     if (!currentValue ){
//         return <progress value={currentValue} max={maxValue}>{0}%</progress>; ;
//     } else 
//     <progress value={currentValue} max={maxValue}>{currentValue}%</progress>;}


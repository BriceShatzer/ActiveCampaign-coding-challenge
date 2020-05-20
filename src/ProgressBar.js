 
import React, { Component} from "react";

function ProgressBar (props) {
    const progress = props.totalAmount/5000
    let progressStyle;
    if (progress > 1) {
        progressStyle = {background: '#139879 '}
    } else {
        // #b6f2e4 | --mint-40 | lighterGreen
        // #6ae6c9 | --mint-60 | darkerGreen 
        const progressLine = Math.ceil(progress*100);
        progressStyle = {
            background: `linear-gradient(90deg, 
                #6ae6c9 0%, 
                #6ae6c9 ${progressLine}%,
                #b6f2e4 ${progressLine}%, 
                #b6f2e4 100%)`
        }
    }

    return (
        <div className="progressBar" style={progressStyle} />
    )
}

export default ProgressBar;
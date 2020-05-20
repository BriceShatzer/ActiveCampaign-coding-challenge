 
import React, { Component} from "react";

function TotalAmountSpeechBubble (props) {
    const amountRemaining = 5000 - props.totalAmount;

    return (
        <div className="totalAmountSpeechBubble">
            {amountRemaining>0 ? 
                <React.Fragment><strong>${amountRemaining.toLocaleString()}</strong> still needed to fund this project</React.Fragment> :
                'This Project has been successfully funded!'
            }
        </div>
    )
}

export default TotalAmountSpeechBubble;
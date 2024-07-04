import React from "react";

export const TextAmount = () => {
    return(
        <div className="text-amount">
            <div>
                <h2>Tip Amount</h2>
                <p>/ person</p>
            </div>
            <h3>$<span id="tip-amount">0</span></h3>
        </div>
    )
} 
import React from "react";

export const TotalAmount = () => {
    return(
        <div className="total-amount">
            <div>
                <h2>Total</h2>
                <p>/ person</p>
            </div>
            <h3>$<span id="total">0</span></h3>
        </div>
    )
}
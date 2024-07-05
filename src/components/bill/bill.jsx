import React from "react";

export const Bill = ({bill, setBill}) => {
    return(
        <div>
        <h1>Bill</h1>
        <label htmlFor="input-bill">
          <input
            className="input-bill"
            id="input-bill"
            type="number"
            value={bill}
            min="0"
            onChange={(e) => setBill(parseFloat(e.target.value))}
          />
        </label>
      </div>
    )
}
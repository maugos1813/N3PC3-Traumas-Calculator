import React from "react";

export const Data = () => {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input className="input-bill" id="input-bill" type="number" value="0" min="0" />
      </label>

      <h2>Select Tip %</h2>
      <ul>
        <li id="percentage-5"><button type="button" className="percentage-button" value="5">5%</button></li>
        <li id="percentage-10"><button type="button" className="percentage-button" value="10">10%</button></li>
        <li id="percentage-15"><button type="button" className="percentage-button" value="15">15%</button></li>
        <li id="percentage-25"><button type="button" className="percentage-button" value="25">25%</button></li>
        <li id="percentage-50"><button type="button" className="percentage-button" value="50">50%</button></li>
        <li><input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button" /></li>
      </ul>

      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input id="input-people" className="input-people" type="number" value="1" min="1" />
      </label>
    </div>
  );
};
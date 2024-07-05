import React, { useEffect, useState } from "react";

export const Porcentag = ({ setTipPercentage, numberOfPeople, setNumberOfPeople, reset }) => {
    const percentages = [5, 10, 15, 25, 50];
    const [customTip, setCustomTip] = useState(0);
    const [activePercentage, setActivePercentage] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
  
    useEffect(() => {
      setCustomTip(0);
      setActivePercentage(null);
      setShowWarning(false);
    }, [reset]);
  
    const handlePercentageClick = (percentage) => {
      setTipPercentage(percentage);
      setCustomTip(0);
      setActivePercentage(percentage);
    };
  
    const handleCustomTipChange = (e) => {
      const value = Number(e.target.value);
      setTipPercentage(value);
      setCustomTip(value);
      setActivePercentage(null);
    };
  
    const handleNumberOfPeopleChange = (e) => {
      const value = Number(e.target.value);
      setNumberOfPeople(value);
      setShowWarning(value <= 0 );
    };
  
    return (
      <div>
        <h2>Select Tip %</h2>
        <ul>
          {percentages.map((percentage) => (
            <li key={percentage}>
              <button
                type="button"
                className={`percentage-button ${activePercentage === percentage ? "active" : ""}`}
                onClick={() => handlePercentageClick(percentage)}
              >
                {percentage}%
              </button>
            </li>
          ))}
          <li>
            <input
              type="number"
              placeholder="Custom"
              value={customTip}
              className="percentage-button"
              onChange={handleCustomTipChange}
            />
          </li>
        </ul>
        <h2>
          Number of People
          {showWarning && <span className="warning"> Can't be zero</span>}
        </h2>
        <input
          id="input-people"
          className="input-people"
          type="number"
          value={numberOfPeople}
          min="1"
          onChange={handleNumberOfPeopleChange}
        />
      </div>
    );
  };
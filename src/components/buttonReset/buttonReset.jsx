import React, { useEffect, useState } from "react";

export const Reset = ({ onReset, reset }) => {
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      setIsActive(reset);
    }, [reset]);
  
    const handleButtonClick = () => {
      onReset();
      setIsActive(false);
    };
  
    const buttonClass = isActive ? 'reset-button ' : 'reset-button active';
  
    return (
      <button
        type="button"
        id="reset-button"
        className={buttonClass}
        onClick={handleButtonClick}
      >
        RESET
      </button>
    );
  };
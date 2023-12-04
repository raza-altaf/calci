// Import necessary dependencies
import { createContext, useState } from "react";

// Create a context for the calculator
export const CalcContext = createContext();

// CalcProvider component
const CalcProvider = ({ children }) => {
  // Initialize state for calculator values using useState hook
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // Create a value object to be provided to the context consumers
  const providerValue = {
    calc,
    setCalc,
  };

  // Provide the context value to the children components
  return (
    <CalcContext.Provider value={providerValue}>
      {children}
    </CalcContext.Provider>
  );
};

// Export the CalcProvider component
export default CalcProvider;

// Import necessary dependencies
import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import { Textfit } from "react-textfit";

// Screen component
const Screen = () => {
  // Access calc from CalcContext using useContext hook
  const { calc } = useContext(CalcContext);

  // Render the screen using the Textfit component
  return (
    <Textfit className="screen" max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </Textfit>
  );
};

// Export the Screen component
export default Screen;

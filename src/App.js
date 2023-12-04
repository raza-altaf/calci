// Import necessary components and context
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";

// Define the values for the calculator buttons
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

// App component
function App() {
  return (
    // Wrap the entire app with the CalcProvider to provide context
    <CalcProvider>
      {/* Use the Wrapper component to structure the layout */}
      <Wrapper>
        {/* Display the calculator screen */}
        <Screen />
        {/* Use the ButtonBox component to group and style the calculator buttons */}
        <ButtonBox>
          {/* Map through the button values and create Button components */}
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

// Export the App component
export default App;

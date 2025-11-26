import { useState } from "react";

import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  // jika ruleya seragam bisa menggunakan Object
  // const isValidInput = Object.values(userInput).every(value => value > 0); 

  // 1. Destructuring agar kodenya bersih dan mudah dibaca
  const { initialInvestment, annualInvestment, expectedReturn, duration } = userInput;

  const initialValid = initialInvestment > 0;
  const annualValid = annualInvestment > 0;
  const returnValid = expectedReturn > 0;
  const durationValid = duration > 0;

  // Jika rulennya tidak seragam
  const isValidInput = initialValid && durationValid && returnValid && annualValid;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue, // add symbol + to convert string to number
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleUserInput} />
      {isValidInput ? <Result input={userInput} /> : <p className="center">Please Input Valid Number</p>}
    </>
  );
}

export default App;

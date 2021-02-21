import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { getReversedOrderedArray } from "../../services/api"
import { FormContainer } from "./style";

const MIN_VALUE = 1;
const MAX_VALUE = 1000;

function NumberForm() {
  const [numberValue, setNumberValue] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setNumberValue(event.target.value);
  };

  const handleFocus = () => {
    errorMessage && setErrorMessage("");
  };

  const handleSubmit = async () => {
    try {
      if (numberValue >= MIN_VALUE && numberValue <= MAX_VALUE) {
        const reversedOrderedArray = await getReversedOrderedArray(numberValue)
        console.log(reversedOrderedArray);
        
      } else {
        setErrorMessage("Number should be between 1-1000");
      }
    } catch (error) {}
  };

  return (
    <FormContainer>
      <Input
        placeholder={"Please enter a number..."}
        onChange={handleInputChange}
        onFocus={handleFocus}
        type={"number"}
        value={numberValue}
        errorMessage={errorMessage}
      />
      <Button onClick={handleSubmit} label={"send"} />
    </FormContainer>
  );
}

export default NumberForm;

import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsTouched(true);
    }

    const valueIsValid = validateValue(enteredValue);

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        isTouched,
        valueChangeHandler,
        reset
    }
};

export default useInput;
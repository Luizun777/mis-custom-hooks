import { useState } from "react"

export const useCounter = (initialVlaue = 1) => {

  const [counter, setCounter] = useState(initialVlaue);

  const increment = (value = 1) => {
    setCounter(counter+value);
  }

  const decrement = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter-value);
  }

  const reset = () => {
    setCounter(initialVlaue);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}

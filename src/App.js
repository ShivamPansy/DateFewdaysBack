import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("nov 7 2024");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="App">
        <button onClick={() => setStep(step - 1)}>&minus;</button>
        <span>Steps : {step}</span>
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>
      <div className="App">
        <button onClick={() => setCount((count) => count - step)}>
          &minus;
        </button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <div>
        <p>
          {count} days ago was {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

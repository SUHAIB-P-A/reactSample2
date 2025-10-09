import Counter from "./components/counter";
import { useState } from "react";

function App() {
  // array destructuring example
  const [count, setCount] = useState(0);
  // const arr = [1,2,3];
  // const [a,b,c] = arr;


  const addCount = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={addCount}>
        Add Count
      </button>
      <Counter count={count} />
    </div>
  );
}

export default App;

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

  // spread operator example
  let obj = { title: "1st Counter", count };
  return (
    <div>
      <button onClick={addCount}>
        Add Count
      </button>
      {/* use of spread operator ({...obj}) */}
      <Counter {...obj} />
      <Counter title={"2nd Counter"} count={count} />
    </div>
  );
}

export default App;

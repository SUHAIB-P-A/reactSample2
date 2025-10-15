//import Counter from "./components/counter";
import Employee from "./components/employee";
import { useState } from "react";

function App() {
  // array destructuring example
  const [count, setCount] = useState(0);
  // const arr = [1,2,3];
  // const [a,b,c] = arr;


  const addCount = () => {
    setCount(count + 1);
  }

  // spread operator example              // rest operator example
  //let obj = { title: "1st Counter", count,place: "India" };
  // map helper example variable
  let emp = [{ name: "suhaib", age: 21 }, { name: "arif", age: 22 }, { name: "sajid", age: 23 }];
  return (
    <div>
      <button onClick={addCount}>
        Add Count
      </button>
      {/* use of spread operator ({...obj}) */}
      {/*<Counter {...obj} />*/}
      {/*<Counter title={"2nd Counter"} count={count} />*/}

      {/* use of map helper */}
      {
        emp.map((emp) => {
          return (<Employee name={emp.name} age={emp.age} />);
        })
      }
    </div>
  );
}

export default App;

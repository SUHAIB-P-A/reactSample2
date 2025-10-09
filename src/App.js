function App() {
  let count = 0;
  function addCount() {
    count = count + 1;
    console.log(count);
  }
  return (
    <div>
      <button onClick={addCount}>
        Add Count
      </button>
      <h1>counter: {count}</h1>
    </div>
  );
}

export default App;

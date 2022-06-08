import './App.css';
import React from "react"

function App() {

  const [value, setCounter] = React.useState(5);

  const incrementHandler = (counter) => {
    setCounter(value + counter)
  }

  const doubleHandler = ()=>{
    setCounter(value * 2)
  }

  return (
    <>
      <div>
        <h1>counter App</h1>
        <h4>{value}</h4>
        <button onClick={()=>incrementHandler(1)}>Increment</button>
        <button onClick={()=>incrementHandler(-1)}>Decrement</button>
        <div><button onClick={doubleHandler}>Double</button></div>
      </div>
    </>
  );
}

export default App;

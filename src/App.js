import './App.css';
import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber, divideNumber, incrementNumber, multiplyNumber } from './actions';

function App() {
  const myState =  useSelector((state) => state.changeNumber)
  const state =  useSelector((state) => state.mulAndDivNumber)

  const dispatch = useDispatch()

  return (  
    <div className="App">
        <h1>Increment/Decrement using Redux</h1>

        <button onClick={()=>dispatch(decrementNumber(5))}>Decrement</button>
        <h4>{myState}</h4>
        <button onClick={()=>dispatch(incrementNumber(10))}>Increment</button>

      <h1>Multiplication/Division using Redux</h1>

      <button onClick={() => dispatch(multiplyNumber(5))}>Multiply by 5</button>
      <h4>{state}</h4>
      <button onClick={() => dispatch(divideNumber(10))}>Divide by 10</button>
    </div>
  );
}

export default App;

import { useState, useEffect, useContext, createContext, useRef, useReducer } from 'react';
import './App.css';

// useContext: Access Context in a Function Component
const ThemeContext = createContext();

function customReducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + action.value };
    case "substract":
      return { count: state.count - action.value };
  
    default:
      return state;
  }

}
function App() {
  // useState: Add State to a Function Component
  // const [count, setCount] = useState(0);

  const initialState = { count: 0 };
  // Using useReducer to handle complex state modifications logic
  const [state, dispatch] = useReducer(customReducer, initialState);

  // useRef: Access DOM Elements
  const inputRef = useRef(null);

  // useEffect: Side Effects
  useEffect(() => {
    console.log(`Value of count changed: ${state.count}`);

    if (inputRef.current) {
      inputRef.current.value = `Count is ${state.count}`;
    }
  }, [state.count]);

  

  return (
    <>
      <div>
        How are you doing ?
      </div>
      <br />
      <button onClick={() => dispatch({type: "add", value: 10})}>Increment {state.count}</button>
      <button onClick={() => dispatch({type: "substract", value: 10})}>Decrement {state.count}</button>
      <ThemeContext.Provider value="dark">
        {/* I saw that this supplies value to any child component that uses useContext */}
        <ThemeDisplay />
      </ThemeContext.Provider>

      <input type="text" ref={inputRef}/>
    </>
  )
}

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}

export default App;
import { useState, useEffect, useContext, createContext, useRef } from 'react';
import './App.css';

// useContext: Access Context in a Function Component
const ThemeContext = createContext();
const theme = useContext(ThemeContext);

function App() {
  // useState: Add State to a Function Component
  const [count, setCount] = useState(0);

  // useRef: Access DOM Elements
  const inputRef = useRef(null);

  // useEffect: Side Effects
  useEffect(() => {
    console.log(`Value of count changed: ${count}`);

    // Bind the new value to the input element
    if (inputRef.current) {
      inputRef.current.value = `Count is ${count}`;
    }
  }, [count]);

  return (
    <>
      <div>
        How are you doing ?
      </div>
      <br />
      <button onClick={() => { console.log("Clicked !"); setCount(count + 1) }}>Click me here {count}</button>
      <ThemeContext.Provider value="dark">
        {/* I saw that this supplies value to any child component that uses useContext */}
        <div>
          Current Theme: {theme}
        </div>
      </ThemeContext.Provider>

      <input type="text" ref={inputRef}/>
    </>
  )
}

export default App;
import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value)); 
  }; 
 
  function divide(e) { 
    // Add the code for the divide function
    e.preventDefault();
    let value = Number(inputRef.current.value);
    if(value) {
      setResult((result) => result / value);
    } else {
      alert("Illegal operation, please provide a value different than 0.");
    }
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult((result) => 0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          Total: {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset Input</button>
        <button onClick={resetResult}>reset result</button>         
      </form> 
    </div> 
  ); 
} 
 
export default App; 
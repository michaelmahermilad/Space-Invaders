 
import { useEffect } from 'react';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./a.js";
    script.type="module"
     console.log(script)
    document.body.appendChild(script);
  }, [])
  return (
    <div className="App">
    
    <canvas id="game"></canvas> 
    
    </div>
  );
}

export default App;

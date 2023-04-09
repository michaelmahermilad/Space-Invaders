 
import { useEffect } from 'react';
import './App.css';
 
function App() {
  useEffect(() => {
   
 
    const script = document.createElement("script");
    script.src = "./a.js";
    script.type="module"
     console.log(script)
    
      document.body.appendChild(script);

  
  }, [])
  return (
    <div className="App" >
    <canvas id="game"></canvas> 
    
    </div>
  );
}

export default App;

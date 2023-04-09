 
import { useEffect } from 'react';
import './App.css';
import background from "./background.png";

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("startimage").style.opacity=".6"
     
   
  
    },300);
    setTimeout(() => {
      document.getElementById("startimage").style.display="none"
  
   
    },50000);
 
    const script = document.createElement("script");
    script.src = "./a.js";
    script.type="module"
     console.log(script)
    
      document.body.appendChild(script);

  
  }, [])
  return (
    <div className="App" >
    <img id='startimage' style={{width:'100%',height:'100%' ,zIndex:'1000'}} src={background}
    />
    <canvas id="game"></canvas> 
    
    </div>
  );
}

export default App;

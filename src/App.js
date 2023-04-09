 
import { useEffect, useState } from 'react';
import './App.css';
 import child from "./child.mp3"
 let s=new Audio(child)

function App() {   
   
 let [sA,setSA]=useState("stoped")
  useEffect((e) => {
   togle(e)
 
 

    
 
      
    
  
    const script = document.createElement("script");
    script.src = "./a.js";
    script.type="module"
     console.log(script)
    
      document.body.appendChild(script);

  
  }, [])
   function togle(e){
if(e)
    e.preventDefault()
    if(sA!=="stoped"){
       s.pause()
 setSA("stoped")
    }
    else{
      setSA("play")
       
      s.play();
      s.volume=1
      s.addEventListener('ended', function() {
     
        s.currentTime = 0;
        s.play();
        s.volume=1
      }, false); 
    
   
    }


 
   
  }
  return (
    <div className="App" >
    <canvas id="game"></canvas> 
    <button style={{position:'absolute',top:'1rem',right:'1rem',opacity:".9",backgroundColor:'transparent',border:'none' ,borderRadius:'8px',fontFamily:"cursive", color:'white',fontWeight:"bolder",fontSize:"1rem"}} onClick={(e)=>togle(e)}>mute</button>
    </div>
  );
}

export default App;

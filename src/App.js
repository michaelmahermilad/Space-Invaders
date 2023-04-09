 
import { useEffect, useState } from 'react';
import './App.css';
 import child from "./child.mp3"
     


function App() {   
let [s,setS]=useState(new Audio(child))
 let [sA,setSA]=useState("ONGOING")
useEffect(()=>{ 
 
document.onkeydown=()=>{
  if(sA!=="NOVOICE"){


  s.play();
  setSA("ONGOING")
  
  s.addEventListener('ended', function() {
 
    
    s.play();
    s.volume=1
  }, false); 
 

 }else{
  s.pause()
  setSA("NOVOICE")
 }
}


},[s,togle])
 
  useEffect(() => {
 
     
    
   
    
  
 

    
 
      
    
  
    const script = document.createElement("script");
    script.src = "./a.js";
    script.type="module"
     console.log(script)
    
      document.body.appendChild(script);

  
  }, [])
   function togle(e){

    e.preventDefault()
    if(sA=="ONGOING"){
 s.pause()
 setSA("NOVOICE")
    }
    else{
      s.play()
      setSA("ONGOING")
       
     
    
   
    }


 
   
  }
  return (
    <div className="App" >
    <canvas id="game"></canvas> 
    <button style={{position:'absolute',top:'1rem',right:'1rem',opacity:".9",width:"5rem",height:'2rem',backgroundColor:'transparent',border:'none' ,borderRadius:'8px',fontFamily:"cursive", color:'white',fontWeight:"bolder",fontSize:"1.7rem"}} onClick={(e)=>togle(e)}>🔇</button>
    </div>
  );
}

export default App;

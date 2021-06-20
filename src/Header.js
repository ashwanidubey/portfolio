import { useState ,useEffect} from "react";

function Header({value})
{
   const [count, setcount] = useState(value)
   const [state, setstate] = useState(["red","white","white"])
   useEffect(
   ()=>{
      console.log(count)
      if(count===0)
         setstate(["red","white","white"])
      else if(count===1)
         setstate(["white","red","white"])
      else
         setstate(["white","white","red"]) 
   },[count] )
    return  <> 
   
             <nav>   

                 <div id="nav-left">
                    <h3 id="myname">ASHWANI DUBEY</h3>
                 </div>
                 <div id="nav-right">
                    <a style={{color: state[0]}}  onClick={()=>{setcount(0)}} href="/" id="nav-right-a1">Home</a>
                    <a style={{color: state[1]}} onClick={()=>{setcount(1)}} id="nav-right-a2" href="/skills">Skills</a>
                    <a style={{color: state[2]}} onClick={()=>{setcount(2)}} id="nav-right-a3" href="/projects">Projects</a>    
                 </div>     
             </nav>
            </>
}
export default Header
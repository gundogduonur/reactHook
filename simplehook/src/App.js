import React ,{useEffect, useState} from "react";

function App() {
  const [count,setCount]=useState(0);
  const [value2,setValue]=useState("value");


  useEffect(()=>{
    document.title=`You clicked ${count} times` 
   })

  return (
   <div>
     <p>Value:{value2}</p>
     <button onClick={() => setValue("changed")}>
        Click me
      </button>
    <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
   </div>
  );
}

export default App;

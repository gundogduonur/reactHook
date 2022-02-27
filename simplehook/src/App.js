import React ,{useEffect, useState} from "react";

const themes = {
  light: {
    background: "#eeeeee"
  },
  dark: {
    background: "#222222"
  }
};
const ThemeContext = React.createContext(themes.light);
function App() {
  const [count,setCount]=useState(0);
  const [value2,setValue]=useState("value");


  useEffect(()=>{
    document.title=`You clicked ${count} times` 
   })
  

  return (
    <ThemeContext.Provider value={themes.dark}>
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
    </ThemeContext.Provider>
 
  )}
  function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }
export default App;

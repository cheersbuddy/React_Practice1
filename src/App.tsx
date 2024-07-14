/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App*/


/*  to test message printing from message.tsx

import Message from './Message';
function App(){
  return <div><Message></Message></div>;
}
export default App;*/



/* to use ListGroup components
import ListGroup from './components/ListGroup';
function App(){
  let items = ["New York", "London", "Paris", "Tokyo"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}
export default App;*/


/*to use alert Componenent
import Alert from "./components/Alert";

function App(){
  return(
    <div>
      <Alert >
       <h1>hello world</h1> 
        <p>How are you</p>
      </Alert>
    </div>
  );
}
export default App;
*/
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App(){
  const[alertVisible, setAlertVisible] = useState(false);
  return(
  <div>
    {alertVisible && <Alert onClose={()=> setAlertVisible(false)}>My alert</Alert>}
  <Button  onClick={()=> setAlertVisible(true)}>My button</Button>
  </div>
  );
}
export default App;
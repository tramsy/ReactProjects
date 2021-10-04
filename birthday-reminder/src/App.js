import { useState } from 'react';
import './App.css';
import Components from './Component';
import { List } from './List';
function App() 
{

  const[data, setData] = useState(List);


  return(
    <>
      <div className='container'>
          <div style={{textAlign: 'center', margin: '1em 0'}}>
            <h1>{data.length} Birthdays</h1>
          </div>
          <Components people = {data} />
          <div className='container'>
            <button onClick={()=>{setData([])}}>Clear</button>            
          </div>
      </div>
    </>
  )
}

export default App;

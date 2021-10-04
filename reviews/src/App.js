import { Employe } from "./Employe";


const App = ()=>{

  const divstyle = {
    width: '50%', 
    margin: '5em auto', 
    textAlign: 'center', 
  }

  return(<>
      <div style={divstyle}>
        <h2>Reviews</h2>
      </div>
      <Employe />
  </>)
}


export default App;

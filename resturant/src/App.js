import Header from "./Header";
import { menu } from "./data";
import Dishes from "./Dishes";
import { useState } from "react";


function App(){
    const categoriesButtons = ['all', ...new Set(menu.map(item=>item.category))]
    const[data, setData] = useState(menu);
   

    return(<>
         <div className='container'>
            <h1>Our Menu</h1>
        </div>
        <Header categoriesButtons = {categoriesButtons} setData = {setData} />
        <Dishes data={data} />
        
    </>)
}


export default App;
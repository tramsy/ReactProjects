import { useState } from "react";
import { Category } from "./Category";
import FoodItems from './data';
import Food from './Food';

function App(){

    const[foodList, setFoodList] = useState(FoodItems);

    const doFilter = (value)=>{
        console.log(value);
        if(value === 'All'){
            setFoodList(FoodItems);
            return;
        }
        let newList =  FoodItems.filter((item)=>item.category === value)
        setFoodList(newList)
    }


    return (
        <>
            <div className='container'>
                <h1>Our Menu</h1>
            </div>
                <Category func = {doFilter} />
            <main>
                <Food data={foodList} />
            </main>
        </>
    )
}

export default App;
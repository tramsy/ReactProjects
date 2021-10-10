import { useEffect, useState } from "react";
import Card from './Card';

let count = 0;

const AllCocktails = ({props})=>{

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const[loading, setLoading] = useState(true);
    const[allCocktails, setAllCocktails] = useState([]);



    const fetchAllCocktails = async ()=>{
        setLoading(true)
        try{
            const responce = await fetch(`${url}${props}`);
            const cocktailList = await responce.json();
            const { drinks } = cocktailList;
            if(drinks)
            {
                const newCocktailList = drinks.map((item)=>{
                    const{idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass} = item;
                        return{
                            id: idDrink,
                            name: strDrink,
                            image: strDrinkThumb,
                            isAlcoholic: strAlcoholic,
                            glass: strGlass
                        }
                });
                setAllCocktails(newCocktailList)
                setLoading(false);
            }else{
                setLoading(false);
                setAllCocktails([])
            }
        }catch(error){
            console.log('Got this error while fetching: ', error)
        }
    }

    useEffect(()=>{
        fetchAllCocktails()
    }, [props])

    
    if(loading)
    {
        return(<section className='all-coctails'>
            <h2>Loading...</h2>
        </section>)
    }

    if(allCocktails.length <= 0){
        return(<section className='all-coctails'>
                <h2>No Matching Cocktails</h2>
            </section>)
    }

    return(
        <section className='all-coctails'>
            <h2>Cocktails</h2>
            <div className='cards-sec'>
                {
                    allCocktails.map((item, index)=>{
                        return(<Card props = {item} key={index} />)
                    })
                }
            </div>
        </section>
    )
}

export default AllCocktails;
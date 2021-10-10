import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import SingleCocktailCompo from "./SingleCocktailCompo";

const SingleCocktail = ()=>{

    const { id } = useParams();
    const[loading, setLoading] = useState(true);
    const[singleCoctail, setSingleCoctail] = useState(null);


    const fetchSingleCocktail = async()=>{
        setLoading(true)
        try
        {
            const responce = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
            const singleCocktail = await responce.json();
            const{ drinks } = singleCocktail;
            let filterCocktail = null;
            if(drinks)
            {
                const{
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: isAlcoholic,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions 
                } = drinks[0];
                filterCocktail = {name, image, isAlcoholic, category, glass, instructions}
                setLoading(false);
                setSingleCoctail(filterCocktail);

            }else{
                setSingleCoctail(null);
                setLoading(false);
            }
            setLoading(false);

        }catch(error){
            console.log(`Got this erro while fetching ${error}`)
        }
    }


    
    useEffect(()=>{
        fetchSingleCocktail()
    }, [id])


    if(loading){
        return(<>
        <Navbar />
        <section className='all-coctails'>
            <h2>Loading...</h2>
        </section>
        </>)
    }

    return(<>
        <Navbar />
        <SingleCocktailCompo singleCoctail = {singleCoctail} />
    </>)

}


export default SingleCocktail;




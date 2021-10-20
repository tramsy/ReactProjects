import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import SingleProduct from "../components/SingleProduct";
import { AppContext } from "../Context";
import Navbar from '../components/Navbar';


const View = ()=>
{
    const { id } = useParams();
    const{ dispatch } = useContext(AppContext);

    const getSingleItem = ()=>{
        dispatch({type: 'fetchSingleItem', payload: id});
    }

    useEffect(()=>
    {
        getSingleItem()
    }, [])

    return(<>
    
        <Navbar />
        <SingleProduct />
    </>
    );
}


export default View;
import AllCocktalis from "../components/AllCocktails";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { useState } from "react";


const Home = ()=>{

    const[searchTerm, setSearchTerm] = useState('a');


    return(<>
        <Navbar />
        <Search searchFunction = {setSearchTerm} searchTerm = {searchTerm} />
        <AllCocktalis props = {searchTerm} />
    </>)
}


export default Home;
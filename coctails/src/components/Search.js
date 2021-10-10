const Search = ({searchFunction, searchTerm})=>{


    return(<>
        <section className='search'>
            <h3>Search your favorite coctail</h3>
            <div>
                <input 
                type = 'text' 
                name='coctailName' 
                onChange={(e)=>{searchFunction(e.target.value)}}
                />
            </div>
        </section>
    </>)
}


export default Search;
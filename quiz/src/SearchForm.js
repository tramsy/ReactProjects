const SearchForm = ({data, handleChange, handleSubmit})=>{
    return(<>
        <form onSubmit={handleSubmit}>
            <h1>Setup Quiz</h1>
            <div>
                <label htmlFor='number'>Number of questions</label>
                <input 
                type = 'number' 
                id='number'  
                name='number'
                value={data.number}
                onChange={(e)=>handleChange(e)}
                />
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <select name='category' id='category' onChange={(e)=>handleChange(e)}>
                    <option value='21' name='category'>Sports</option>
                    <option value='23' name='category'>History</option>
                    <option value='24' name='category'>Politics</option>
                </select>
            </div>
            <div>
                <label htmlFor='dificulty'>Dificulty</label>
                <select name='difficulty' id='deficulty' onChange={(e)=>handleChange(e)}>
                    <option value='easy'>easy</option>
                    <option value='midium'>midium</option>
                    <option value='hard'>hard</option>
                </select>
            </div>
            <div>
                <button type='submit' className='btn'>Create</button>
            </div>
        </form>
    </>)

}
export default SearchForm;
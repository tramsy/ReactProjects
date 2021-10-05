import { useEffect, useState } from "react";
import { Alert } from "./Alert";
import List from './List';


const getStorage = ()=>{
    let list = localStorage.getItem('list');
    if(list){
        list = JSON.parse(localStorage.getItem('list'))  
        return list;
    }else{
        return [];
    }
}


function App(){

    const[name, setName] = useState('');
    const[list, setList] = useState(getStorage());
    const[toast, setToast] = useState({type: '', mssg: ''});

    const inputEvent = (e)=>{
        setName(e);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(name.trim().length === 0 ){
            setToast({type: 'warning', mssg: 'enter valid value'})
            setTimeout(()=>{setToast({type: '', mssg: ''})}, 2000)
            return 
        }
        const entry ={
            id: new Date().getTime().toString(),
            name: name
        }
        setList([...list, entry])
        setName('')
        setToast({type: 'success', mssg: 'Item added on the list'})
        setTimeout(()=>{setToast({type: '', mssg: ''})}, 2000)
    }

    const doClear = ()=>{
        setList([])
        setToast({type: 'danger', mssg: 'List is cleared '})
        setTimeout(()=>{setToast({type: '', mssg: ''})}, 2000)
    }

    const doFilter = (id)=>{
        setList(list.filter((item)=>item.id!==id));
        setToast({type: 'danger', mssg: 'item is removed '})
        setTimeout(()=>{setToast({type: '', mssg: ''})}, 2000)
    }


    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])



    return(
        <main className='container'>
            <Alert {...toast} />
            <div>
                <h2>Grocery Bud</h2>    
            </div>
            <form onSubmit={handleSubmit}>
                <input 
                type = 'text' 
                name='name' 
                id='name'
                value={name}
                onChange={(e)=>{inputEvent(e.target.value)}} 
                />
                <button type='submit' className='btn'>Submit</button>
            </form>
            <List data={list} doFilter = {doFilter} />
            
            {list.length > 0 && 
                <div>
                    <button className='btn clear-btn' onClick={doClear}>Clear Items</button>
                </div>
            }
        </main>
    )
}


export default App;
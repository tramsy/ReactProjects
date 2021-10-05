export const Alert = ({type, mssg})=>{

    return(
        <div className={`'toast' ${type} `}>
            <p>{mssg}</p>
        </div>
    )
}





// <div className={`toast ${cls.cls}`}>
//             <p>{cls.cls==='danger' ? 'list is cleared' : cls.cls==='success' ? 'item is added' : cls.cls==='warning'  ? 'item is removed' : ''}</p>
//         </div>
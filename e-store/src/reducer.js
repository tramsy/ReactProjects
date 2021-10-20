import {data} from './data';
import { addItemToStorage, updateItemStorage, getStorage } from './LocalStorageManager';




export const reducer = (state, action)=>
{
    if(action.type === 'toggleNav')
    {
        if(state.isNavOpen === true) {   
            state.isNavOpen = false;
        }
        else    state.isNavOpen = true;
        return {...state}
    }

    if(action.type === 'itemTotal')
    {
        let arr = getStorage();
        if(arr.length > 0)
        {
            
            let tmp =  arr.map(item=>item.amount);
            tmp = tmp.reduce((initial, current)=>initial + current);
            state.quantity = tmp;
            return{...state}
        }
        else{
           
            state.quantity = 0;
        }
        return{...state}
    }

    if(action.type === 'createBill')
    {
        state.total = action.payload;
        return({...state})
    
    }


    if(action.type === 'normal')
    {
        state.showToast = false;
        return{...state}
    }


    if(action.type === 'addToCart')
    {

        if(state.cart.length > 0)
        {

            let index = state.cart.findIndex(obj=>obj.id == action.item.id);
            if(index !== -1){
                state.cart[index].amount = state.cart[index].amount + 1;
                // localStorage.setItem('list', JSON.stringify( state.cart ))
                updateItemStorage(action.item);
                state.showToast = true;
                return {...state, cart:[...state.cart]}
            } 
        }
        // localStorage.setItem('list', JSON.stringify( state.cart ))
        addItemToStorage(action.item);
        state.showToast= true
        return{...state, cart: [...state.cart, action.item]};
    }

    if(action.type === 'decreseQuantity')
    {
        let index = state.cart.findIndex(obj=>obj.id===action.item.id)
        if(state.cart[index].amount === 1)
        {
            state.cart = state.cart.filter(item=>item.id !== action.item.id)
            return{...state, cart: [...state.cart]}
        }else{
            state.cart[index].amount = state.cart[index].amount - 1;
            return({...state, cart: [...state.cart ]}) 
        }
        
    }

    if(action.type === 'remove')
    {
        state.cart = state.cart.filter(item=>item.id !== action.payload)
        return{...state, cart: [...state.cart]}
    }

    if(action.type === 'fetchSingleItem')
    {
       
        let tmp = data.findIndex(obj=>obj.id == action.payload);
        state.singleProduct = data[tmp];
        return {...state}
    }



}
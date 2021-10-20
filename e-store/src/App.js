import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import View from './pages/View';
import Checkout from './pages/Checkout';



function App(){
    return(<>
        <Switch>
            <Route path='/' component = {Home} exact />
            <Route path='/about' component = {About} exact />
            <Route path='/view/:id' component = {View} exact />
            <Route path='/checkout' component = {Checkout} exact />
        </Switch>
        
    </>)
}



export default App;
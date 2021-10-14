import { Route, Switch } from "react-router";
import Home from "./Home";
import Quiz from "./Quiz";

function App(){
    return(<main>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/quiz' component={Quiz}  />
        </Switch>
    </main>)
}


export default App;
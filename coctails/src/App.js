import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./components/SingleCocktail";


function App() {
  return (
   <Switch>
     <Route path = "/" component={Home} exact />
     <Route path = "/about" component={About} exact />
     <Route path = "/singlecocktail/:id" component={SingleCocktail} exact />
     <Route />
   </Switch>
  )
}

export default App;

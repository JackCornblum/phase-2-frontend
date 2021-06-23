import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom"

import Header from './Components/Header';
import NavBar from './Components/Navbar';
import Planner from './Components/Planner';
import ShoppingList from './Components/ShoppingList'

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/planner">
          <Planner />
        </Route>
        <Route exact path="/shoppinglist">
          <ShoppingList />
        </Route>
      </Switch>
    </>
  );
}

export default App;

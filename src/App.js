import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom"

import Home from './Components/Home';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import Planner from './Components/Planner';
import ShoppingList from './Components/ShoppingList';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useEffect, useState } from 'react';

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [reload, setReload] = useState(false)
  const [currentUser, setCurrentUser] = useState("")

  useEffect(() => {
    

    // fetch("http://localhost:3001/ingredients")
    // .then(res => res.json())
    // .then(data => {
    //   // let array = data.map(ingred => ingred.name)
    //   setIngredients(data)
    // })
  },[reload])

  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/planner">
          <Planner setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} />
        </Route>
        <Route exact path="/shoppinglist">
          <ShoppingList ingredients={ingredients} setIngredients={setIngredients} />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route>
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

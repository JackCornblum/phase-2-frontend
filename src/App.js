
import './App.css';
import {Route, Switch, NavLink} from "react-router-dom"
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planner from './Components/Planner';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/planner">
          <Planner />
        </Route>
      </Switch>
    </>
  );
}

export default App;

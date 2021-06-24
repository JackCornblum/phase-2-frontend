import Calendar from "./Calendar"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function Planner({ingredients, setIngredients, setReload}){



    return (
        <>
            <Calendar setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} />
            <Link to="/shoppinglist"><Button variant="success" id="shopping-list">Generate Shopping List</Button></Link>
        </>
    )
}

export default Planner
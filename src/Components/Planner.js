import Calendar from "./Calendar"
import { Button } from "react-bootstrap"

function Planner({ingredients, setIngredients, setReload}){



    return (
        <>
            <Calendar setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} />
            <Button>Generate Shopping List</Button>
        </>
    )
}

export default Planner
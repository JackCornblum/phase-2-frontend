import Ingredient from './Ingredient'
import {ListGroup} from "react-bootstrap"

function ShoppingList({ingredients, setIngredients}) {

    document.title = "Meal Planner App | Shopping List";

    let ingredientsArray = ingredients.map(ingred => <Ingredient id={ingred.id} key={ingred.name} ingredient={ingred.name} handleDelete={handleDelete} />)

    // need to fix
    function handleDelete(id) {
        let updatedArray = ingredients.filter(ingred => ingred.id !== id)
        setIngredients(updatedArray)
        fetch(`http://localhost:3001/ingredients/${id}`, {
            method: "DELETE"
        })
    }

    return (
        <>
            <h2>Here's what you need to get from the store!</h2>
            <ListGroup id="list-group">
                {ingredientsArray}
            </ListGroup>
        </>
    )
}

export default ShoppingList;
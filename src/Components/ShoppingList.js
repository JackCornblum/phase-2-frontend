import Ingredient from './Ingredient'

function ShoppingList({ingredients, setIngredients}) {

    let ingredientsArray = ingredients.map(ingred => <Ingredient id={ingred.id} key={ingred.name} ingredient={ingred.name} handleDelete={handleDelete} />)

    // need to fix
    function handleDelete(id) {

        fetch(`http://localhost:3001/ingredients/${id}`, {
            method:"DELETE"
        })

        let copyOfIngredients = [...ingredients]
        let updatedArray = copyOfIngredients.filter(ingred => ingred.id !== id)
        
        setIngredients(updatedArray)
    }

    return (
        <>
            <h2>Here's what you need to get from the store!</h2>
            <ul>
                {ingredientsArray}
            </ul>
        </>
    )
}

export default ShoppingList;
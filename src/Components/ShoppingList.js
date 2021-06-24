import Ingredient from './Ingredient'

function ShoppingList({ingredients, setIngredients}) {

    let ingredientsArray = ingredients.map(ingred => <Ingredient key={ingred.name} ingredient={ingred.name} handleDelete={handleDelete} />)

    // need to fix
    function handleDelete(item) {
        let updatedArray = ingredients.filter(ingred => ingred !== item)
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
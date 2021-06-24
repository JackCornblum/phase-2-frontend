import Ingredient from './Ingredient'

function ShoppingList({ingredients, setIngredients}) {

    let ingredientsArray = ingredients.map(ingred => <Ingredient id={ingred.id} key={ingred.name} ingredient={ingred.name} handleDelete={handleDelete} />)

    // need to fix
    function handleDelete(id) {
<<<<<<< HEAD

        // fetch(`http://localhost:3001/ingredients/${id}`, {
        //     method:"DELETE"
        // })

        // let copyOfIngredients = [...ingredients]
        // let updatedArray = copyOfIngredients.filter(ingred => ingred.id !== id)
        
        // setIngredients(updatedArray)
=======
        let updatedArray = ingredients.filter(ingred => ingred.id !== id)
        setIngredients(updatedArray)
        fetch(`http://localhost:3001/ingredients/${id}`, {
            method: "DELETE"
        })
>>>>>>> 72638d6fc938391094581f535752c91e641d8a3e
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
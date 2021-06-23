import { Button } from "react-bootstrap";

function FoodItem({title, image, recipeId, calories, recipe, setPopupRendered, renderRecipe, popupRendered, setSearchResults, setSearchValue}) {

    function handleClick(e){
        if(e.target.textContent === "Add to Planner"){
            let recipeId = e.target.id
            setPopupRendered(false)
            renderRecipe(recipeId)
            setSearchResults([])
            setSearchValue("")
        } else {
            setPopupRendered(true)
            setSearchResults([])
            setSearchValue("")
            fetch(`http://localhost:3001/recipes/${recipeId}`, {
                method: "DELETE"
            })
        }
    }

    return (
        <div>
            <a href={recipe} target="_blank" rel="noopener noreferrer">{title}</a><br />
            <small>Calories: {calories}</small><br />
            <img src={image} alt={title} /><br />
            <Button variant="success" size="sm" onClick={handleClick} id={recipeId}>{popupRendered ? "Add to Planner" : "Remove"}</Button>
        </div>
    )
}

export default FoodItem
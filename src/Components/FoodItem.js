import { Button } from "react-bootstrap";

function FoodItem({title, image, id, calories, recipe, setPopupRendered, renderRecipe, popupRendered, setSearchResults, setSearchValue}) {

    function handleClick(e){
        if(e.target.textContent === "Add to Planner"){
            let id = e.target.id
            setPopupRendered(false)
            renderRecipe(id)
            setSearchResults([])
            setSearchValue("")
        } else {
            setPopupRendered(true)
            setSearchResults([])
            setSearchValue("")
            // fetch delete
            // how to make sure to delete only one that matches cellId?
            // fetch(`http://localhost:3001/recipes/${id}`, {
            //     method: "DELETE"
            // })
        }
    }

    return (
        <div>
            <a href={recipe}>{title}</a><br />
            <small>Calories: {calories}</small><br />
            <img src={image} alt={title} /><br />
            <Button variant="success" size="sm" onClick={handleClick} id={id}>{popupRendered ? "Add to Planner" : "Remove"}</Button>
        </div>
    )
}

export default FoodItem
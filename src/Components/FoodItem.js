import { Button } from "react-bootstrap";


function FoodItem({title, image, id, setPopupRendered, renderRecipe, popupRendered, setResultState, setSearchValue}) {
    

    function handleClick(e){
        if(e.target.textContent === "Add to Planner"){
            let id = e.target.id
            setPopupRendered(false)
            renderRecipe(id)
            setResultState([])
            setSearchValue("")

        }
        else{
            setPopupRendered(true)
            setResultState([])
            setSearchValue("")
        }
        // console.log(e)
    }


    return (
        <div>
            <h3>{title}</h3>
            <img src={image} />
            <Button variant="primary" onClick={handleClick} id={id} size="sm" >{popupRendered ? "Add to Planner" : "Remove"}</Button>
            
            
        </div>
    )
}

export default FoodItem
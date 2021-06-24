import { Button, ListGroup } from "react-bootstrap"

function Ingredient({id, ingredient, handleDelete}) {

    function handleClick(e) {
        handleDelete(id)
    }

    return (
        <>
      
            <ListGroup.Item variant="light">
                {ingredient} &nbsp;&nbsp;
                <Button variant="outline-success" size="sm" onClick={handleClick}>Remove</Button>
            </ListGroup.Item>
       
        </>
    )
}

export default Ingredient;
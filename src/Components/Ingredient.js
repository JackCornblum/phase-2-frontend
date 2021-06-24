import { Button } from "react-bootstrap"

function Ingredient({ingredient, handleDelete, id}) {

    function handleClick(e) {
        handleDelete(id)
    }

    return (
        <>
            <li>
                {ingredient} &nbsp;&nbsp;
                <Button variant="success" size="sm" onClick={handleClick}>Remove</Button>
            </li><br />
        </>
    )
}

export default Ingredient;
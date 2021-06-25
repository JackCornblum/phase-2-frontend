import Calendar from "./Calendar"

function Planner({ingredients, setIngredients, setReload}){
    document.title = "Meal Planner App | Planner";

    return (
        <>
            <Calendar setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} />
        </>
    )
}

export default Planner
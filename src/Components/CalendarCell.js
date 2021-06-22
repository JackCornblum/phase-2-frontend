import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from 'react';
import FoodItem from './FoodItem'
import {Button} from "react-bootstrap"
import { auto } from '@popperjs/core';

function CalendarCell({id}){

    const [searchValue, setSearchValue] = useState("")
    const [resultState, setResultState] = useState([])
    const [popupRendered, setPopupRendered] = useState(true)

    function handleChange(e) {
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let fetchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=9408d54a6e154e6abc0e74e0d986d24b&query=${searchValue}&number=5`
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            let foodResults = data.results.map(obj => {
                return (
                    <FoodItem setResultState={setResultState} setSearchValue={setSearchValue} popupRendered={popupRendered} renderRecipe={renderRecipe} setPopupRendered={setPopupRendered} title={obj.title} image={obj.image} id={obj.id} key={obj.id} />
                )
            })
            console.log(foodResults)
            setResultState(foodResults)
        })
    }

    function renderRecipe(id){
        fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9408d54a6e154e6abc0e74e0d986d24b&includeNutrition=true`)
        .then(resp => resp.json())
        .then(data => {
            let recipeDetails = <FoodItem setSearchValue={setSearchValue} setResultState={setResultState} setPopupRendered={setPopupRendered} title={data.title} image={data.image} recipe={data.sourceUrl} key={data.id} />
            setResultState(recipeDetails)
        })

    }

    function handleClick(){
        setResultState([])
        setSearchValue("")
        console.log("hello")
    }

    let popupJsx = (
        <Popup onClose={handleClick} contentStyle={{width:auto}} trigger={<button  variant="success" size="sm"> Add Meal</button>} position="right center">
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchValue} onChange={handleChange}></input>
            </form>

            {resultState}
                
        </Popup>
    )



    return (
        <td id={id}>
            {/* <Popup contentStyle={{width:auto}} trigger={<Button variant="success" size="sm"> Add Meal</Button>} position="right center">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchValue} onChange={handleChange}></input>
                </form>

                {resultState}
                
            </Popup> */}
            {popupRendered ? popupJsx : resultState }
        

        </td>
    )
}

export default CalendarCell
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import { Button } from "react-bootstrap"
import { auto } from '@popperjs/core';

import FoodItem from './FoodItem'

function CalendarCell({cellId}) {

    const key = '9408d54a6e154e6abc0e74e0d986d24b'

    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [popupRendered, setPopupRendered] = useState(true)

    function handleChange(e) {
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let fetchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${searchValue}&number=5`
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            let foodResults = data.results.map(obj => {
                return (
                    <>
                        <FoodItem setSearchResults={setSearchResults} setSearchValue={setSearchValue} popupRendered={popupRendered} renderRecipe={renderRecipe} setPopupRendered={setPopupRendered} recipe={data.sourceUrl} title={obj.title} image={obj.image} id={obj.id} key={obj.id} /><br />
                    </>
                )
            })
            setSearchResults(foodResults)
        })
    }

    function renderRecipe(id){
        let fetchUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&includeNutrition=true`
        fetch(fetchUrl)
        .then(resp => resp.json())
        .then(data => {
            let recipeDetails = <FoodItem setSearchValue={setSearchValue} setSearchResults={setSearchResults} setPopupRendered={setPopupRendered} title={data.title} image={data.image} recipe={data.sourceUrl} key={data.id} calories={data.nutrition.nutrients[0].amount}/>
            setSearchResults(recipeDetails)
            let recipeObj = {recipe: data.sourceUrl, name: data.title, image: data.image, calories: data.nutrition.nutrients[0].amount, cell: cellId}
            fetch("http://localhost:3001/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipeObj)
            })
            .then(res => res.json())
            .then(console.log)
        })
    }

    function handleClose(){
        setSearchResults([])
        setSearchValue("")
    }

    let popupJsx = (
        <Popup onClose={handleClose} contentStyle={{width:auto}} trigger={<Button  variant="success" size="sm"> Add Meal</Button>} position="right center">
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchValue} onChange={handleChange}></input>
            </form>
            {searchResults}   
        </Popup>
    )

    return (
        <td id={cellId}>
            {/* <Popup contentStyle={{width:auto}} trigger={<Button variant="success" size="sm"> Add Meal</Button>} position="right center">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchValue} onChange={handleChange}></input>
                </form>

                {searchResults}
                
            </Popup> */}
            {popupRendered ? popupJsx : searchResults }
        

        </td>
    )
}

export default CalendarCell
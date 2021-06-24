import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import { Button } from "react-bootstrap"
import { auto } from '@popperjs/core';

import FoodItem from './FoodItem'

function CalendarCell({cellId, ingredients, setIngredients, setReload}) {
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [popupRendered, setPopupRendered] = useState(true)

    console.log(ingredients)

    useEffect(() => {
        fetch("http://localhost:3001/recipes")
        .then(resp => resp.json())
        .then(data => {
            // console.log(data)
            // console.log(cellId)
            data.forEach(obj => {
                if(obj.cell === cellId){
                    let recipeDetails = <FoodItem setSearchValue={setSearchValue} setSearchResults={setSearchResults} setPopupRendered={setPopupRendered} title={obj.name} image={obj.image} recipe={obj.recipe} key={obj.id} recipeId={obj.id} calories={obj.calories}/>
                    setSearchResults(recipeDetails)
                    setPopupRendered(false)
                }
                
            })
        })
    }, [cellId])

    const key = '9408d54a6e154e6abc0e74e0d986d24b'


    function handleChange(e) {
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let fetchUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${searchValue}&number=5&addRecipeNutrition=true`
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            let foodResults = data.results.map(obj => {
                return (
                    <>
                        <FoodItem setSearchResults={setSearchResults} setSearchValue={setSearchValue} popupRendered={popupRendered} renderRecipe={renderRecipe} setPopupRendered={setPopupRendered} calories={obj.nutrition.nutrients[0].amount} recipe={obj.sourceUrl} title={obj.title} image={obj.image} recipeId={obj.id} key={obj.id} /><br />
                    </>
                )
            })
            console.log(data)
            setSearchResults(foodResults)
        })
    }

    function renderRecipe(id){
        console.log(id)
        let fetchUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}&includeNutrition=true`
        fetch(fetchUrl)
        .then(resp => resp.json())
        .then(data => {
        //     console.log(data)
            let newIngredients = data.nutrition.ingredients.map(item => item.name)
        //     let array = ingredients.map(ingred => ingred.name)
        //     newIngredients.forEach(ingred => {
        //         if (!array.includes(ingred)) {
        //             fetch("http://localhost:3001/ingredients", {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/json"
        //                 },
        //                 body: JSON.stringify({name: ingred})
        //             })
        //         } 
        //     })
                
        //     setReload(true)
        //     console.log(ingredients)
            // setIngredients(updatedArray)
            // let ingredObj = {ingredients}
            let recipeObj = {recipe: data.sourceUrl, name: data.title, image: data.image, calories: data.nutrition.nutrients[0].amount, cell: cellId, ingredients: newIngredients}
            fetch("http://localhost:3001/recipes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(recipeObj)
            })
            .then(res => res.json())
            .then(data => {
                let recipeDetails = <FoodItem setSearchValue={setSearchValue} setSearchResults={setSearchResults} setPopupRendered={setPopupRendered} title={data.name} image={data.image} recipe={data.recipe} key={data.id} recipeId={data.id} calories={data.calories}/>
                setSearchResults(recipeDetails)


                let array = ingredients.map(ingred => ingred.name)
                debugger
                newIngredients.forEach(ingred => {
                    if (!array.includes(ingred)) {
                        fetch("http://localhost:3001/ingredients", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({name: ingred})
                        })
                    } 
                })
                // setReload(true)
                // console.log(ingredients)
            })
        })
    }

    function handleClose(){
        setSearchResults([])
        setSearchValue("")
    }

    let popupJsx = (
        <Popup key={cellId} onClose={handleClose} contentStyle={{width:auto}} trigger={<Button  variant="success" size="sm"> Add Meal</Button>} position="right center">
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
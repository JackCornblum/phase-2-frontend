import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {useState} from 'react';
import FoodItem from './FoodItem'

function CalendarCell({id}){

    const [searchValue, setSearchValue] = useState("")
    const [resultState, setResultState] = useState([])

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
                    <FoodItem title={obj.title} image={obj.image} id={obj.id} />
                )
            })
            console.log(foodResults)
            setResultState(foodResults)
        })
    }


    return (
        <td id={id}>
            <Popup trigger={<button> Add Meal</button>} position="right center">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={searchValue} onChange={handleChange}></input>
                </form>

                {resultState}
                
            </Popup>
        </td>
    )
}

export default CalendarCell
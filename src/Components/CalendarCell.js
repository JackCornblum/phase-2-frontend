import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function CalendarCell({id}){
    return (
        <td id={id}>
            <Popup trigger={<button> Add Meal</button>} position="right center">
                <div>
                    <input type="text"></input>
                </div>
            </Popup>
        </td>
    )
}

export default CalendarCell
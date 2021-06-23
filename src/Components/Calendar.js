import 'reactjs-popup/dist/index.css';
import { Table } from "react-bootstrap"

import CalendarCell from './CalendarCell';

function Calendar({ingredients, setIngredients, setReload}) {

    const morning = ["mondayM", "tuesdayM", "wednesdayM", "thursdayM", "fridayM"]
    const afternoon = ["mondayA", "tuesdayA", "wednesdayA", "thursdayA", "fridayA"]
    const evening = ["mondayE", "tuesdayE", "wednesdayE", "thursdayE", "fridayE"]

    let morningPopup = morning.map(item => <CalendarCell setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} key={item} cellId={item} />)
    let afternoonPopup = afternoon.map(item => <CalendarCell setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} key={item} cellId={item} />)
    let eveningPopup = evening.map(item => <CalendarCell setReload={setReload} ingredients={ingredients} setIngredients={setIngredients} key={item} cellId={item} />)

    return(
        <div>
            <Table striped bordered>
                <tbody>
                <tr>
                    <th>Meals</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
                <tr>
                    <td>Morning</td>
                    {morningPopup}
                </tr>
                <tr>
                    <td>Afternoon</td>
                    {afternoonPopup}
                </tr>
                <tr>
                    <td>Evening</td>
                    {eveningPopup}
                </tr>
                </tbody>
            </Table>           
        </div>
    )
}

export default Calendar
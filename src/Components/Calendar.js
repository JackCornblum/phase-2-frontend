import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CalendarCell from './CalendarCell';
import {Table} from "react-bootstrap"

function Calendar(){

    const morning = ["mondayM", "tuesdayM", "wednesdayM", "thursdayM", "fridayM"]
    const afternoon = ["mondayA", "tuesdayA", "wednesdayA", "thursdayA", "fridayA"]
    const evening = ["mondayE", "tuesdayE", "wednesdayE", "thursdayE", "fridayE"]

    let morningPopup = morning.map(item => <CalendarCell key={item} id={item} />)
    let afternoonPopup = afternoon.map(item => <CalendarCell key={item} id={item} />)
    let eveningPopup = evening.map(item => <CalendarCell key={item} id={item} />)

    return(
        <div>
            <Table striped>
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
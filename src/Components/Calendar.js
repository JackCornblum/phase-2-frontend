import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CalendarCell from './CalendarCell';

function Calendar(){

    const morning = ["mondayM", "tuesdayM", "wednesdayM", "thursdayM", "fridayM"]
    const afternoon = ["mondayA", "tuesdayA", "wednesdayA", "thursdayA", "fridayA"]
    const evening = ["mondayE", "tuesdayE", "wednesdayE", "thursdayE", "fridayE"]

    let morningPopup = morning.map(item => <CalendarCell key={item} id={item} />)
    let afternoonPopup = afternoon.map(item => <CalendarCell key={item} id={item} />)
    let eveningPopup = evening.map(item => <CalendarCell key={item} id={item} />)

    return(
        <div>
            <table>
                <thead>
                    <th>Meals</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </thead>
                
                <tr>Morning
                    {morningPopup}
                </tr>
                <tr>Afternoon
                    {afternoonPopup}
                </tr>
                <tr>Evening
                    {eveningPopup}
                </tr>
                
            </table>
            
        </div>
    )
}

export default Calendar
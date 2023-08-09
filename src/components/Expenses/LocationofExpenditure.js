import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './LocationofExpenditure.css'


const LocationOfExpenditure=(props)=> {
    const Delete=()=>{
        console.log('clicked');
    }

return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'></div>
            <h2>{props.location}</h2>
            <ExpenseDetails  title={props.title} amount={props.amount} ></ExpenseDetails>
            <button onClick={Delete}>DeleteExpense</button>
           
        </div>
    );
}
export default LocationOfExpenditure;
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './LocationofExpenditure.css'


const LocationOfExpenditure=(props)=> {
    const [amount,setAmount]=useState(props.amount)
    
    const updateAmount=()=>{
        setAmount('100$')
       
    }

return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className='expense-item__description'></div>
            <h2>{props.location}</h2>
            <ExpenseDetails  title={props.title} amount={amount} ></ExpenseDetails>
            <button onClick={updateAmount}>updateExpense</button>
           
        </div>
    );
}
export default LocationOfExpenditure;
import './ExpenseItem.css'

function LocationOfExpenditure(props) {
   

    return (
        <div className='expense-item'>
            <div className='expense-item__description'></div>
            <h2>{props.date.toISOString()}</h2>
            <div className='expense-item__description'></div>
            <h2>{props.location}</h2>
            <div className='expense-item__description'></div>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs{props.amount}</div>
        </div>
    )
}
export default LocationOfExpenditure;
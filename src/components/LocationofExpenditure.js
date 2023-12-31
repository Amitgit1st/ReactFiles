import './ExpenseItem.css'

function LocationOfExpenditure(props) {

    // In the previous code DATE is not readable
    // here in this code MONTH DAY & YEAR are readable 
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});
    const year=props.date.getFullYear();
   

    return (
        <div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            
            <div className='expense-item__description'></div>
            <h2>{props.location}</h2>
            <div className='expense-item__description'></div>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>Rs{props.amount}</div>
        </div>
    )
}
export default LocationOfExpenditure;
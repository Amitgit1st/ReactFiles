import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2023, 7, 6);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 4000;
    const LocationOfExpenditure = "Maharashtra"

    return (
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>
            <div className='expense-item__description'></div>
            <h2>{LocationOfExpenditure}</h2>
            <div className='expense-item__description'></div>
            <h2>{expenseTitle}</h2>

            <div className='expense-item__price'>Rs{expenseAmount}</div>
        </div>
    )
}
export default ExpenseItem;
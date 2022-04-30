import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


export default function NewExpense(props) {
    const [showForm, setShowForm] = useState(false);
    let openFormExpenses = () => {
        setShowForm(true)
    }

    const onCancelHandler = () => {
        setShowForm(false)
    }
    const unicKey = Math.random().toString();

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: unicKey,
        };
        props.onAddedExpenseData(expenseData);

    };

    return (
        <div className='new-expense'>
            {!showForm &&
                <button onClick={openFormExpenses}>Add Expenses</button>}
            {showForm &&
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler} />}
        </div>
    )
}

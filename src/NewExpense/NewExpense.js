import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';


export default function NewExpense(props) {

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
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

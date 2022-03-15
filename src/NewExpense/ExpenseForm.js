
import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm(props) { // 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmoutn] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmoutn(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle, 
        amount: enteredAmount, 
        date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmoutn('');
    setEnteredDate('');
}

//     // const [userInput, setUserInput] = useState({ //alternative method;
//     //     enteredTitle: '',
//     //     enteredAmoutn: '',
//     //     enteredDate: ''
//     // })

//     // const titleChangeHandler = (event) => {//alternative method. If my state depends of the previous state.
//     //    setUserInput((prevState)=>{
//     //        return{...prevState, enteredTitle: event.target.value};
//     //    })
//     // }

//     // const amountChangeHandler = (event) => {
//     //     setUserInput((prevState)=>{
//     //         return {...prevState,  enteredAmoutn: event.target.value}; 
//     //     })
//     // }

//     // const dateChangeHandler = (event) => {
//     //    setUserInput((prevState)=>{
//     //        return{...prevState, enteredDate: event.target.value};
//     //    })
//     // }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="24.02.2022" max="24.02.2025" onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >Add Expense</button>
                </div>
            </div>
        </form>
    )
}
//event.target.value; event - всегда приходит в функцию (слушателя)


























import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css"

import React from 'react'

export default function ExpensesList(props) {


    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Here is empty </h2>
    }
    return (
        <ul className="expenses-list">
            {props.items.map(expense => (<ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />))}
        </ul>
    )
}


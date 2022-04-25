import { useState } from 'react';
import Expenses from './Expenses/Expenses';
import NewExpense from './NewExpense/NewExpense';

const DATE_EXTENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
const [expenses, setExpensesState] = useState(DATE_EXTENSES);

const addNewData = expense => {
  setExpensesState((prevExp)=> {
      return [expense, ...prevExp]
  });
}

  return (
    <div>
      <NewExpense onAddedExpenseData={addNewData}/>
      <Expenses items = {expenses} />
    </div>
  );
}
export default App;

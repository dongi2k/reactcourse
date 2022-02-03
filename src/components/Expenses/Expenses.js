import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card'
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear((selectedYear))
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>

            {/*<ExpenseItem*/}
            {/*    title={props.items[0].title}*/}
            {/*    amount={props.items[0].amount}*/}
            {/*    date={props.items[0].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.items[1].title}*/}
            {/*    amount={props.items[1].amount}*/}
            {/*    date={props.items[1].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.items[2].title}*/}
            {/*    amount={props.items[2].amount}*/}
            {/*    date={props.items[2].date}*/}
            {/*/>*/}
            {/*<ExpenseItem*/}
            {/*    title={props.items[3].title}*/}
            {/*    amount={props.items[3].amount}*/}
            {/*    date={props.items[3].date}*/}
            {/*/>*/}
        </Card>
    )
}

export default Expenses
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getExpenses from '../selectors/expenses';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
    <div>
        <h1> Expense List </h1>
        { props.expenses.map((expense) => {
            return(
                <ExpenseListItem {...expense}/>
            )
        })}
    </div>
);

const setStateProperties = (state) => ({

    expenses: getExpenses(state.expenses, state.filters)
});

export default connect(setStateProperties)(ExpenseList);

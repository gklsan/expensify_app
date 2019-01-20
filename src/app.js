import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStroe from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from "./actions/expenses";
import  { setTextFilter } from "./actions/filters";


const store = configureStroe();

store.dispatch(addExpense({description: 'Water bill', note: 'this is water bill ', createdAt: 2000, amount:3000 }));
store.dispatch(addExpense({description: 'Gas bill', note: 'this is gas bill ', createdAt: 1000, amount:500 }));
store.dispatch(setTextFilter('ll'));

const state = store.getState();
const expenses = getVisibleExpenses(state.expenses, state.filters);
console.log(store.getState());
console.log(expenses)

ReactDOM.render(<AppRouter/> , document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStroe from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import { Provider } from 'react-redux';

const store = configureStroe();

store.dispatch(addExpense({description: 'Water bill', note: 'this is water bill ', createdAt: 2000, amount:3000 }));
store.dispatch(addExpense({description: 'Gas bill', note: 'this is gas bill ', createdAt: 1000, amount:4500 }));
store.dispatch(addExpense({description: 'Rent', note: 'this is rent bill ', createdAt: 2000, amount:10900 }));
// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const state = store.getState();
const expenses = getVisibleExpenses(state.expenses, state.filters);
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));


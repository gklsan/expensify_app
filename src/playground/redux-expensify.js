console.log('redux-expensify.js......');
import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'id_exp',
        description: 'expensify rent',
        note: 'this is the expensify app',
        amount: 5000,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};
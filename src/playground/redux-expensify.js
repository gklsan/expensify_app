console.log('redux-expensify.js......');
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expenses: [{
        id: 'id_exp',
        description: 'expensify rent',
        note: 'this is the expensify app',
        amount: 5000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id );
        default:
            return state;

    }

};

const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Filter reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;

    }
};


// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



console.log(store.getState());

const exp1 = store.dispatch(addExpense({ description: 'test', note: 'test', amount: 3000}));
const exp2 = store.dispatch(addExpense({ description: 'test1', note: 'test1', amount: 5000}));
console.log('exp2', exp2.expense.id);

console.log(store.getState());

store.dispatch(removeExpense({ id: exp2.expense.id }));

console.log(store.getState());
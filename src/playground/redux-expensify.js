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
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        default:
            return state;

    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

})


// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);



console.log(store.getState());

const exp1 = store.dispatch(addExpense({ description: 'Rent', note: 'Rent', amount: 3000}));
const exp2 = store.dispatch(addExpense({ description: 'Coffee', note: 'Coffee', amount: 5000}));
console.log('exp2', exp2.expense.id);

console.log(store.getState());

store.dispatch(removeExpense({ id: exp1.expense.id }));

store.dispatch(editExpense(exp2.expense.id, { amount: 4000 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

console.log(store.getState());


const user = {
    name: 'Gokul',
    age: 20
};


console.log({...user, location: 'Muthur', age: 27});
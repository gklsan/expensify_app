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
    sortBy: 'amount',
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
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;

    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

const sortByAmount = (amount = 500) => ({
    type: 'SORT_BY_AMOUNT',
    sortBy:amount
});

const sortByDate = (date = '') => ({
    type: 'SORT_BY_DATE',
    sortBy: date
});


const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


// store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

const getVisibleExpanses = (expesense, { text, sortBy, startDate, endDate }) => {
    return expesense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt > startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt < endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })
};

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpanses(state.expenses, state.filters);
    console.log(visibleExpense);
});

const exp1 = store.dispatch(addExpense({ description: 'Rent', note: 'Rent', amount: 3000, createdAt: 1000}));

const exp2 = store.dispatch(addExpense({ description: 'Coffee', note: 'Coffee', amount: 5000, createdAt: -1000}));

// store.dispatch(removeExpense({ id: exp1.expense.id }));

store.dispatch(editExpense(exp2.expense.id, { amount: 4000 }));

store.dispatch(setTextFilter('coffee'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(200));
store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

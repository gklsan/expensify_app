console.log('redux.js......');

import { createStore } from 'redux';

const getValue = (value = 1) => (typeof value === 'number' && value) || 1;

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            const incrementBy = getValue(action.incrementBy);
            return { count: state.count + incrementBy };
        case 'DECREMENT':
            const decrementBy = getValue(action.decrementBy);
            return { count: state.count - decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return {count: (action.count || state.count) };
        default:
            return state;
    }
}
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});


const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 0}) => ({
    type: 'SET',
    count
})

store.dispatch(incrementCount({ incrementBy: 15}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(incrementCount());
store.dispatch(incrementCount());

store.dispatch(setCount({count: 100}));

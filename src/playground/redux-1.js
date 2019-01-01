console.log('redux.js......');

import { createStore } from 'redux';

const getValue = (value = 1) => (typeof value === 'number' && value) || 1;

const store = createStore((state = { count: 0 }, action) => {
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
            return state
    }
});

store.subscribe(() => {
    console.log(store.getState());
});


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({ type: 'INCREMENT'});

store.dispatch({ type: 'RESET' });

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({ type: 'DECREMENT'});


store.dispatch({
    type: 'SET',
    count: 101
})
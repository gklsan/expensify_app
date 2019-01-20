// Set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

// Sort by amount
export const sortByAmount = (amount) => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: amount
});

// Sort by date
export const sortByDate = (date) => ({
    type: 'SORT_BY_DATE',
    sortBy: date
});

// Set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// Set end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


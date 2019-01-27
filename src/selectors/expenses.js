import moment from "moment";

export default (expesense, { text, sortBy, startDate, endDate }) => {
    return expesense.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
        const endDateMatch = startDate ? endDate.isSameOrAfter(createdAtMoment) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy == 'date') {
            return (a.createdAt < b.createdAt) ? 1 : -1;
        } else if(sortBy == 'amount') {
            return(a.amount < b.amount) ?  1 : -1
        }
    })
};
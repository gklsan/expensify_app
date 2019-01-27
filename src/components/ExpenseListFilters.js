import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker} from "react-dates";

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null

    };

    onDateChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({calenderFocused}))
    }


    render(){
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value))
                }}/>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const value = e.target.value;
                        if(value == 'amount') {
                            this.props.dispatch(sortByAmount())
                        } else {
                            this.props.dispatch(sortByDate())
                        }
                    }}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false }
                    numberOfMonths={1}
                    showClearDates={true}
                />
            </div>
        );
    }
}
//
// const ExpenseListFilters = (props) => (
//     <div>
//         <input type='text' value={props.filters.text} onChange={(e) => {
//             props.dispatch(setTextFilter(e.target.value))
//         }}/>
//         <select
//             value={props.filters.sortBy}
//             onChange={(e) => {
//                 const value = e.target.value;
//                 if(value == 'amount') {
//                     props.dispatch(sortByAmount())
//                 } else {
//                     props.dispatch(sortByDate())
//                 }
//             }}
//         >
//             <option value='date'>Date</option>
//             <option value='amount'>Amount</option>
//         </select>
//     </div>
// );

const mapStateProperties = (state) => ({
    filters: state.filters
})

export default connect(mapStateProperties)(ExpenseListFilters);
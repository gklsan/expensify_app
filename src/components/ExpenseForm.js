import React from 'react';
import moment from "moment";
import 'react-dates/initialize';
import {SingleDatePicker} from "react-dates";

import 'react-dates/lib/css/_datepicker.css';


const now = moment();
console.log(now.format('MM Do, YYYY'));
export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: 0.0,
        createdAt: moment(),
        calenderFocused: false
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(.\d{0,2})$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}));
    };

    onCalenderFocuseChange = ({ focused }) => {
        this.setState(() => ({calenderFocused: focused}));
    };

    render(){
        return (
            <div>
                <form>
                    <input
                        type='text'
                        placeholder='Description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type='number'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onCalenderFocuseChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false }

                    />
                    <textarea
                        placeholder='note'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
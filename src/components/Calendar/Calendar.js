import React from 'react';
import './Calendar.css';
//import DateItemDetailed from '../DateItemDetailed/DateItemDetailed.js';
import DateItem from '../DateItem/DateItem';


class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }


    getDaysNum = () => {
        let date = new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 0);

        return date.getDate();
    }

    getFirstWeekDay = () => {
        let date = this.state.date;
        date.setDate(1);
        return date.getDay();
    }

    getMonthName = () => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthNames[this.state.date.getMonth()];
    }

    getMonth = () =>{
        return this.state.date.getMonth();
    }

    nextMonth = () => {
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 1)
        });
    }

    prevMonth = () => {
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1, 1)
        });
    }

    currentMonth = () => {
        this.setState({
            date: new Date()
        });
    }

    buildMonthTable = () => {
        let weekDay = this.getFirstWeekDay();
        let monthLength = this.getDaysNum();
        const weeks = 6;
        const days = 7;
        let day = 0;
        let tableWeeks = [], tableDays = [];


        for (let l = 0; l < weeks; l++) {
            tableDays = [];
            for (let i = 0; i < days; i++) {
                let itemKey = l + "" + i + "" + day + "" + this.getMonth + "" + this.getFullYear;
                if (i < weekDay || day >= monthLength) {
                    tableDays.push(
                       <td> <DateItem
                            key={ itemKey } 
                            isDisabled={ true } 
                            isMarked={ false } 
                        /></td>
                    );
                }
                else {
                    weekDay = 0;
                    day++;
                    tableDays.push(
                        <td><DateItem
                            key={itemKey} 
                            day={day}
                        /></td>
                    );
                }
            }
            tableWeeks.push(<tr> {tableDays} </tr>)
        }

        return tableWeeks;
    }

    render() {

        return (
            <div className="calendarContainer">
                <div className="navCalendar">
                    <button 
                        className="prevMonthBtn calendarBtn" 
                        onClick={this.prevMonth} 
                    >◄</button>
                    <div 
                        className="monthName"
                        onClick={this.currentMonth}>
                        {this.getMonthName() + ", " + this.state.date.getFullYear()}
                    </div>
                    <button 
                        className="nextMonthBtn calendarBtn" 
                        onClick={this.nextMonth}
                    >►</button>
                </div>
                <table>
                    <thead className="calendarHead">
                        <tr>
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody>{this.buildMonthTable()}</tbody>
                </table>

            </div>
        );
    }
}

export default Calendar; 
import React from 'react';
import './Calendar.css';
import Modal from '../Modal/Modal';

class DataItem extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
    }
    
    setMark = (mark) => {
        this.setState({
            isMarked: mark
        })
    }

    showModal = () => {
        this.setState({
            showModal: true
        });

    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    }

    saveModal = (name) => {
        this.setState({
            note: name
        }); 
        this.setMark(true);
        this.closeModal();
    }

   


    render() {
        let itemClass = "dateContainer";
        let isMarked = this.state.isMarked;
        let isDisabled = this.props.isDisabled;
        isDisabled ? itemClass = "disabled" : (isMarked ? itemClass = "dateContainer marked" : itemClass = "dateContainer");
        return (
            <div>
                <div className={itemClass} onClick={this.showModal}>
                    <div 
                        className="tooltip">
                            <p>Events:</p>
                            <p>{this.state.note}</p>
                    </div>
                    <div 
                        className="dateDay">
                            {this.props.day}
                    </div>    
                </div>
                <Modal 
                    name="Add/Edit note" 
                    submitText="Save" 
                    text={this.state.note} 
                    cancelText="Cancel" 
                    onAccept={this.saveModal} 
                    onClose={this.closeModal} 
                    isShown={this.state.showModal} 
                />
            </div>
        );
    }
}



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
                       <td> <DataItem 
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
                        <td><DataItem 
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
import React from 'react';
import './Calendar.css';

class DataItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flaged: false,
      disabled: false,
      note: ""
    }
  }
  
  setFlaged = () =>{
    this.setState({
      flaged: !this.state.flaged
    })
  }

  render(){
    let Name = "dateContainer";
    let isFlaged = this.state.flaged;
    let disabled = this.props.disabled;
    disabled?Name="disabled":(isFlaged?Name="dateContainer flaged" : Name="dateContainer");
  
  
    return(
      <td>
        <div className={Name} onClick={this.setFlaged}>
          <div className="dateDay" >{this.props.day}</div>
        </div>
      </td>
    );
    }
  }

    
 
class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
            
        }
    }

    months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    getDaysNum = () =>{
        let date = new Date(this.state.date.getFullYear(), this.state.date.getMonth()+1, 0);
        
        return date.getDate();
    }

    getFirstWeekDay = () => {
        let date = this.state.date;
        date.setDate(1);
        return date.getDay();
    }

    getMonthName = () => {
        return this.months[this.state.date.getMonth()];
    }

    nextMonth = () =>{
            
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() + 1, 1)
        });
        
        
        
    }

    prevMonth = () =>{
            
        this.setState({
            date: new Date(this.state.date.getFullYear(), this.state.date.getMonth() - 1, 1)
        });
        
        
    }

    buildMonthTable = () =>{
        let weekDay = this.getFirstWeekDay();
        let daysNum = this.getDaysNum();
        const weeks = 6;
        const days = 7;
        let day = 0;
        let tableWeeks = [], tableDays = [];
        
    
        for(let l =0 ; l<weeks; l++){
            tableDays = [];
            for(let i=0; i<days; i++){
                if(i<weekDay||day>=daysNum){         
                    tableDays.push(
                        <DataItem disabled={true}/>
                    );
                }
                else {
                    weekDay=0;
                    day++;
                    tableDays.push(
                    <DataItem day={day}/>
                    );
                }
            }
            tableWeeks.push(<tr> {tableDays} </tr>)
        }

        return tableWeeks;
    }

    render(){

        return(
                <div className="calendarContainer">
                    <div className="navCalendar">
                        <button className="prevMonthBtn calendarBtn" onClick={this.prevMonth} >◄</button>
                        <div className="monthName">{this.getMonthName()}</div>
                        <button className="nextMonthBtn calendarBtn" onClick={this.nextMonth}>►</button>
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
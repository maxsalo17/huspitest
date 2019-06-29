import React from 'react';
import './Calendar.css';

class DataItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      flaged: false,
      disabled: false,
      note: "Blina"
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
          <span className="dateDay" data-title={this.props.day}>{this.state.note}</span>
        </div>
      </td>
    );
  }
  }




  function Month(props){

    let date = props.date;
    date.setDate(1);
    let weekDay  = date.getDay();
    date = new Date(date.getFullYear(), date.getMonth()+1, 0);
    let daysNum = date.getDate();
    

    const weeks = 6;
    const days = 7;
    let day = 0;
    let tableWeeks = [], tableDays = [];
    tableWeeks.push(
      
    );
    
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
        );}
      }
      tableWeeks.push(<tr> {tableDays} </tr>)
    }

    return(
      
      <tbody>{tableWeeks}</tbody>
    
    );  }

    
function NavCalendar(props){
  return(
    <div className="navCalendar">
      <div className="prevMonth"><button onClick={props.prevMonth}/></div>
      <div className="monthName">{state.monthName}</div>
      <div className="nextMonth"><button onClick={props.nextMonth}/></div>
    </div>
  );
}
    
function Calendar(){
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let date = new Date();
    let currentMonth = date.getMonth();
    
    let prevMonth = () =>{
      (currentMonth<=0) ? currentMonth=11 : currentMonth -=1;
    }

    let nextMonth = () =>{
      (currentMonth>=11) ? currentMonth=0 : currentMonth +=1;
    }

    let setMonth = () =>{
      setState({
        monthName: months[currentMonth]
      });
    }

    return(
      <div className="calendarContainer">
        <NavCalendar monthName={months[currentMonth]} prevMonth={prevMonth} nextMonth={nextMonth}/>
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
          <Month date={date}/>
        </table>
      
      </div>
    );
  }

  export default Calendar; 
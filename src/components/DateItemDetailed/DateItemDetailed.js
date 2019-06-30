import React from 'react';
import './DateItemDetailed.css';
import Modal from '../Modal/Modal';


class DateItemDetailed extends React.Component {

    constructor(props) {
        super(props);
        this.state={
        }
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
        let isDisabled = this.props.isDisabled;
        isDisabled ? itemClass = "disabled" : itemClass = "dateContainer";
        return (
            <div>
                <div className={itemClass} onClick={this.showModal}>
                    <div 
                        className="dateDay">
                        {this.props.day}
                    </div> 
                    <div 
                        className="note">
                        <p>{this.state.note}</p>
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

export default DateItemDetailed;
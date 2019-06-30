import React from 'react';
import './DateItem.css';
import Modal from '../Modal/Modal';
class DateItem extends React.Component {

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

export default DateItem;
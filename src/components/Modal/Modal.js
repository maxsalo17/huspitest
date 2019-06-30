import React from 'react';
import './Modal.css'


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: this.props.isShown
        }
    }

    onClose = () => {
        this.props.onClose && this.props.onClose();
    }


    textChange = (e) => {
        this.setState({text: e.target.value});
    }
      
    onAccept = () => {
        this.props.onAccept(this.state.text);
    }

    render() {
        if (this.props.isShown) {
            return (
                <div className="modalWrapper">
                    <div className="modalWindow">
                        <div className="modalHeader">
                            <div className="modalName">{this.props.name}</div>
                            <button className="btn modalClose" onClick={() => { this.onClose() }}>×</button>
                        </div>
                        <textarea 
                            className="modalText" 
                            onChange={this.textChange} 
                            defaultValue={this.props.text}>
                        </textarea>
                        <div className="modalNav">
                            <button 
                                className="btn modalSubmit" 
                                onClick={ this.onAccept}>
                                {this.props.submitText}
                            </button>
                            <button 
                                className="btn modalCancel" 
                                onClick={() => { this.onClose() }}>
                                {this.props.cancelText}
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
        else {

            return null;
        }
    }
}

export default Modal;
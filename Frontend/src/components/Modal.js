import React, { Component } from 'react';
import '../scss/HeaderStyle.scss';

class Modal extends Component {
    render() {
        return (
            <div className="overlay" style={{ display: this.props.visibility }} ref="modal">
                <div className="popup">

                    <h3> {this.props.title} </h3> <hr />

                    <button
                        className="btn-regular close"
                        onClick={this.props.onClose}>
                        x
                    </button>

                    <div className="content"> {this.props.content} </div>

                </div>
            </div>
        );
    }
}

export default Modal;

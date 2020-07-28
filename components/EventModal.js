import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";


const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
const timeOptions = { hour: '2-digit', minute: '2-digit' };

class EventModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Modal open={this.props.open} toggle={this.props.toggle}>
          <ModalHeader>
              <h5>{this.props.title}</h5>
              <button className='close' onClick={this.props.toggle}>&times;</button>
          </ModalHeader>
          <ModalBody>
              <p><b>Date:</b>{this.props.startDate.toLocaleDateString(undefined, dateOptions)}</p>
              <p><b>Time:</b>{this.props.startDate.toLocaleTimeString(undefined, timeOptions)} - {this.props.endDate.toLocaleTimeString(undefined, timeOptions)}</p>
          </ModalBody>
        </Modal>
        <style jsx>{`
            h5 {
                display: inline;
            }
            button {
                position: absolute;
                right: 4%;
            }
            p {
                font-size: 20px;
                color: black;
            }
            b {
                margin-right: 2%;
            }
        `}</style>
      </>
    );
  }
}

export default EventModal

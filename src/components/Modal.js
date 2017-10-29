import React, { Component } from 'react'

export default class Modal extends Component {
  constructor(props, context) {
      super(props, context)
      this.state = {
        ismodal : true
      }
      this.modal = this.modal.bind(this);
  }

  modal(){
    this.setState({ismodal:false})
  }

  render() {
    let { message } = this.props
    let { ismodal } = this.state

    return (
      <div>
          { ismodal && <div key="modal">
            <div className="modal-backdrop"></div>
            <div className="confirm-modal-content">           
                 <h3 key='modal-header'>{message}</h3>
                 <button type="button" className="modal_button_primary" onClick={this.modal}>OK</button> 
            </div>
          </div>}
      </div>
    )
  }
}
 



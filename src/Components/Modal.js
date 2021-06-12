import { Component } from 'react'

export default class Modal extends Component {
  state = {
    isVisible: true,
  }

  displayIt(isVisible) {
    if (isVisible) {
      return 'inherit'
    } else {
      return 'none'
    }
  }

  render() {
    return (
      <div
        className="modal"
        style={{
          display: this.displayIt(this.state.isVisible),
          position: 'relative',
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
            </div>
            <div className="modal-body">
              <p>{this.props.children}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => this.props.action()}
              >
                OK
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={(e) => this.setState({ isVisible: false })}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import { Overlay, Modal } from './ModalPage.styled';

const modalRoot = document.querySelector('#modal-root');

class ModalPage extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal> {this.props.children} </Modal>
      </Overlay>,
      modalRoot
    );
  }
}

// Modal.propTypes = {
//   largeImageURL: PropTypes.string.isRequired,
// };
export default ModalPage;

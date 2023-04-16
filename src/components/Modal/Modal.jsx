import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    // console.log('Modal componentDidMount :>>');

    window.addEventListener('keydown', this.handleKetdown);
  }

  //   componentDidUpdate() {
  //     console.log('componentDidUpdate :>>');
  //   }

  componentWillUnmount() {
    // console.log('componentWillUnmount  :> >');

    window.removeEventListener('keydown', this.handleKetdown);
  }

  handleKetdown = e => {
    if (e.code === 'Escape') {
      // console.log('Закриваємо модалку по Escape');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('clik backdrop');

    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    // console.log('e.currentTarget :>> ', e.currentTarget);
    // console.log('e.target :>> ', e.target);
  };

  render() {
    return createPortal(
      <div
        className={css['Modal__backdrop']}
        onClick={this.handleBackdropClick}
      >
        <div className={css['Modal__content']}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

// export default Modal;

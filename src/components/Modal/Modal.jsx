import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount :>>');

    window.addEventListener('keydown', e => {
      //   console.dir(e.code);

      if (e.code === 'Escape') {
        console.log('Закриваємо модалку по Escape');
        this.props.onClose();
      }
    });
  }

  //   componentDidUpdate() {
  //     console.log('componentDidUpdate :>>');
  //   }

  //   componentWillUnmount() {
  //     console.log('componentWillUnmount  :>>');
  //   }

  render() {
    return createPortal(
      <div className={css['Modal__backdrop']}>
        <div className={css['Modal__content']}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

// export default Modal;

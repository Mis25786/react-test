import React, { Component } from 'react';
// import axios from 'axios';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <h1>CONTROL TEST</h1>

        <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Text Modal</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )}
      </>
    );
  }
}

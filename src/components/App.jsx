import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
import Modal from './Modal/Modal';
import Clock from './Clock/Clock';
import Tabs from './Tabs/Tabs';
import tabs from '../tab.json';
import IconButton from './IconButton/IconButton';
import Reader from './Reader/Reader';
import publications from '../publications.json';
import PokemonForm from './Pokemon/PokemonForm';
import PokemonInfo from './Pokemon/PokemonInfo';

export class App extends Component {
  state = {
    showModal: false,
    pokemon: null,
    loading: false,
    pokemonName: '',
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({ showModal: !showModal }));
  // };

  // HTTP;
  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(res => res.json())
  //     .then(pokemon => this.setState({ pokemon }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    // const { showModal } = this.state;

    // const { pokemon, loading } = this.state;

    return (
      <>
        <h1>CONTROL TEST</h1>
        {/* <button type="button" onClick={this.toggleModal}>
          Відкрити модалку
        </button> */}
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Text Modal</p>
            <button type="button" onClick={this.toggleModal}>
              Закрити модалку
            </button>
          </Modal>
        )} */}
        {/* <Tabs items={tabs} /> */}
        {/* {showModal && <Clock />} */}
        {/* <IconButton onClick={this.toggleModal} aria-label="Додати тоду">
          IconButton
        </IconButton> */}
        {/* <Reader items={publications} /> */}
        {/* // HTTP */}
        <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
          {/* {pokemon && <div>{pokemon.name}</div>} */}
          {/* {loading && <h1>Loading...</h1>} */}

          <PokemonForm handleFormSubmit={this.handleFormSubmit} />
          <PokemonInfo pokemonName={this.state.pokemonName} />
          <ToastContainer autoClose={3000} />
        </div>
      </>
    );
  }
}

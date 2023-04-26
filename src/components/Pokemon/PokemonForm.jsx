import { useState } from 'react';
import { toast } from 'react-toastify';

const styles = { from: { marginBottom: 20 } };

export default function PokemonForm({ handleFormSubmit }) {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (pokemonName.trim() === '') {
      //   alert("Введіть ім'я покемона");
      toast("Введіть ім'я покемона");
      return;
    }
    handleFormSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />

      <button type="submit">Знайти</button>
    </form>
  );
}

//=================================================================

// import { Component } from 'react';
// import { toast } from 'react-toastify';

// const styles = { from: { marginBottom: 20 } };

// export default class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   };

//   handleNameChange = e => {
//     this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.pokemonName.trim() === '') {
//       //   alert("Введіть ім'я покемона");
//       toast("Введіть ім'я покемона");
//       return;
//     }
//     this.props.handleFormSubmit(this.state.pokemonName);
//     this.setState({ pokemonName: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} style={styles.form}>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.handleNameChange}
//         />

//         <button type="submit">Знайти</button>
//       </form>
//     );
//   }
// }

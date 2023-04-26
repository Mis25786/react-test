import { useState, useEffect } from 'react';

import PokemonErrorView from './PokemonErrorView';
import PokemonDataView from './PokemonDataView';
import PokemonPendingView from './PokemonPendingView';
import PokemonAPI from '../services/pokemon-api';

export default function PokemonInfo({ pokemonName }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus('pending');

    PokemonAPI.fetchPokemon(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [pokemonName]);

  if (status === 'idle') {
    return <div>Введіть ім'я покемона</div>;
  }
  if (status === 'pending') {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === 'rejected') {
    return <PokemonErrorView message={error.message} />;
  }
  if (status === 'resolved') {
    return <PokemonDataView pokemon={pokemon} />;
  }
}

//===========================================================================================

// import { Component } from 'react';

// import PokemonErrorView from './PokemonErrorView';
// import PokemonDataView from './PokemonDataView';
// import PokemonPendingView from './PokemonPendingView';
// import PokemonAPI from '../services/pokemon-api';

// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,

//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       this.setState({ status: 'pending' });

//       PokemonAPI.fetchPokemon(nextName)
//         .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
//         .catch(error => this.setState({ error, status: 'rejected' }));
//     }
//   }

//   render() {
//     const { pokemon, status, error } = this.state;
//     const { pokemonName } = this.props;

//     if (status === 'idle') {
//       return <div>Введіть ім'я покемона</div>;
//     }
//     if (status === 'pending') {
//       return <PokemonPendingView pokemonName={pokemonName} />;
//     }
//     if (status === 'rejected') {
//       return <PokemonErrorView message={error.message} />;
//     }
//     if (status === 'resolved') {
//       return <PokemonDataView pokemon={pokemon} />;
//     }
//   }
// }

//==========================================================================

// import { Component } from 'react';

// export default class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== nextName) {
//       this.setState({ loading: true, pokemon: null });
//       fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//         .then(response => {
//           if (response.ok) {
//             return response.json();
//           }
//           return Promise.reject(new Error(`Нема покемона на ім'я ${nextName}`));
//         })
//         .then(pokemon => this.setState({ pokemon }))
//         .catch(error => this.setState({ error }))
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     const { pokemon, loading, error } = this.state;
//     const { pokemonName } = this.props;

//     return (
//       <div>
//         {error && <h1>{error.message}</h1>}
//         {/* {error && <h2>Покемона з таким ім'я {pokemonName} нема</h2>} */}

//         {loading && <div>Завантажуємо...</div>}
//         {!pokemonName && <div>Введіть ім'я покемона</div>}
//         {pokemon && (
//           <div>
//             <p>{pokemon.name}</p>
//             <img
//               src={pokemon.sprites.other['official-artwork'].front_default}
//               alt={pokemon.name}
//               width="300"
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }

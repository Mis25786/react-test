import PokemonDataView from './PokemonDataView';
import pendingImage from '../../img/what.jpg';

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div>Завантажуємо...</div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}

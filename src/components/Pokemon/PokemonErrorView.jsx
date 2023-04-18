import errorImage from '../../img/fukyou.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      {message}
    </div>
  );
}

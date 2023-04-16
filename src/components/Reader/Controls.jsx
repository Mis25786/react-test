export const Controls = ({ onChange, totalItems, currentItem }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={currentItem === totalItems}
        onClick={() => onChange(1)}
      >
        Вперед
      </button>
    </section>
  );
};

export const TextInput = ({ setInput, label }) => {
  return (
    <div className="form__container">
      <label className="form__label" htmlFor="text-input">
        {label}
      </label>
      <input
        name="text-input"
        className="form__input"
        type="text"
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
};

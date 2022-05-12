export const Options = ({ engine, setEngine }) => {
  return (
    <div className="form__options">
      <label className="form__label" htmlFor="engine">
        Select the OpenAI Engine you would like to use:
      </label>
      <select
        className="form__select"
        name="engine"
        value={engine}
        onChange={(event) => setEngine(event.target.value)}
      >
        <option className="form__option" value="text-davinci-002">
          DaVinci
        </option>
        <option className="form__option" value="text-curie-001">
          Curie
        </option>
        <option className="form__option" value="text-babbage-001">
          Babbage
        </option>
        <option className="form__option" value="text-ada-001">
          Ada
        </option>
      </select>
    </div>
  );
};

import davinci from "../../assets/images/davinci.png";
import curie from "../../assets/images/curie.png";
import babbage from "../../assets/images/babbage.png";
import ada from "../../assets/images/ada.png";
import { useEffect } from "react";

export const Options = ({ engine, setEngine, avatar, setAvatar }) => {
  useEffect(() => {
    switch (engine) {
      case "text-davinci-002":
        setAvatar(davinci);
        break;

      case "text-curie-001":
        setAvatar(curie);
        break;

      case "text-babbage-001":
        setAvatar(babbage);
        break;

      case "text-ada-001":
        setAvatar(ada);
        break;

      default:
        break;
    }
  }, [engine]);

  return (
    <div className="form__options">
      <div className="form__container">
        <label className="form__label" htmlFor="engine">
          Choose your curator
        </label>
        <select
          className="form__select"
          name="engine"
          value={engine}
          onChange={(event) => {
            setEngine(event.target.value);
          }}
        >
          <option className="form__option" value="text-davinci-002">
            DaVinci
          </option>
          <option className="form__option" value="text-curie-001">
            Madam Curie
          </option>
          <option className="form__option" value="text-babbage-001">
            Count Babbage
          </option>
          <option className="form__option" value="text-ada-001">
            Apparition Ada
          </option>
        </select>
      </div>
      <img className="form__avatar" src={avatar} alt="curator-avatar" />
    </div>
  );
};

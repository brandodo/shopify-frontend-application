import Moment from "react-moment";
import { SpeechButton } from "./SpeechButton";

export const Sketch = ({ data }) => {
  const { id, prompt, choices, created, engine, avatar } = data;

  let curator;

  switch (engine) {
    case "text-davinci-002":
      curator = "DaVinci";
      break;

    case "text-curie-001":
      curator = "Madam Curie";
      break;

    case "text-babbage-001":
      curator = "Count Babbage";
      break;

    case "text-ada-001":
      curator = "Apparition Ada";
      break;

    default:
      break;
  }

  return (
    <div id={id} className="sketches__card">
      <div className="sketches__card-container">
        <div>
          <h4 className="sketches__card-header">
            Prompt: <span>{prompt}</span>
          </h4>
          <p className="sketches__card-text">
            <span>Curator: </span>
            {`${curator} (${engine})`}
          </p>
        </div>
        <img className="sketches__card-avatar" src={avatar} />
      </div>
      <SpeechButton text={choices[0].text} engine={engine} />
      <p className="sketches__card-text">{choices[0].text}</p>
      <div className="sketches__card-date">
        <p className="sketches__card-text">Created on: </p>
        <Moment
          className="sketches__card-text"
          unix
          format="MMM DD, YYYY HH:mm:ss"
        >
          {created}
        </Moment>
      </div>
    </div>
  );
};

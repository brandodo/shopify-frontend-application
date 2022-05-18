import Moment from "react-moment";
import { SpeechButton } from "./SpeechButton";

export const Card = ({ data }) => {
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
    <div id={id} data-testid="card" className="cards__card">
      <div className="cards__card-container">
        <div>
          <h4 className="cards__card-header">
            Prompt: <span>{prompt}</span>
          </h4>
          <p className="cards__card-text">
            <span>Curator: </span>
            {`${curator} (${engine})`}
          </p>
        </div>
        <img className="cards__card-avatar" src={avatar} />
      </div>
      <SpeechButton text={choices[0].text} engine={engine} />
      <p className="cards__card-text">{choices[0].text}</p>
      <div className="cards__card-date">
        <p className="cards__card-text">Created on: </p>
        <Moment
          className="cards__card-text"
          unix
          format="MMM DD, YYYY HH:mm:ss"
        >
          {created}
        </Moment>
      </div>
    </div>
  );
};

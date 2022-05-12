import Moment from "react-moment";
import { SpeechButton } from "./SpeechButton";

export const Sketch = ({ data }) => {
  const { id, prompt, choices, created, engine } = data;

  return (
    <div id={id} className="sketches__card">
      <h4 className="sketches__card-header">Prompt: {prompt}</h4>
      <p className="sketches__card-text">
        <span>Engine: </span>
        {engine}
      </p>
      <SpeechButton text={choices[0].text} />
      <p className="sketches__card-text">{choices[0].text}</p>
      <div className="sketches__card-date">
        <p className="sketches__card-text">Created on: </p>
        <Moment unix format="MMM DD, YYYY HH:mm:ss">
          {created}
        </Moment>
      </div>
    </div>
  );
};

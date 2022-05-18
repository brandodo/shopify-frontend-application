import { useSpeechSynthesis } from "react-speech-kit";

export const SpeechButton = ({ text, engine }) => {
  const { speak, cancel, voices } = useSpeechSynthesis();

  let voice;

  switch (engine) {
    case "text-davinci-002":
      voice = voices[0];
      break;

    case "text-curie-001":
      voice = voices[2];
      break;

    case "text-babbage-001":
      voice = voices[3];
      break;

    case "text-ada-001":
      voice = voices[4];
      break;

    default:
      break;
  }

  return (
    <button
      className="cards__button"
      onClick={() => {
        console.log(voices);
        cancel();
        speak({ text: text, voice: voice });
      }}
    >
      Read it to me!
    </button>
  );
};

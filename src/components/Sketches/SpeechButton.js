import Speech from "react-speech";

export const SpeechButton = ({ text }) => {
  const styles = {
    play: {
      button: {
        width: "28",
        height: "28",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "yellow",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
  };

  return <Speech text={text} style={styles.play} />;
};

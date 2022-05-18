import { useState } from "react";
import "./Form.scss";
import { Options } from "./Options";
import { TextInput } from "./TextInput";

export const Form = ({ formHandle }) => {
  const [input, setInput] = useState("");
  const [engine, setEngine] = useState("text-curie-001");
  const [avatar, setAvatar] = useState("");

  const disableButton = input ? false : true;

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        formHandle(input, engine, avatar);
      }}
    >
      <TextInput setInput={setInput} label="Write a thriller about" />
      <Options
        engine={engine}
        setEngine={setEngine}
        setAvatar={setAvatar}
        avatar={avatar}
      />
      <input
        className={
          disableButton
            ? "form__submit form__submit--disabled"
            : "form__submit form__submit--hover"
        }
        name="submit-button"
        type="submit"
        disabled={disableButton}
      />
    </form>
  );
};

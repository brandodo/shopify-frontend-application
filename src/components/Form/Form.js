import { useState } from "react";
import "./Form.scss";
import { Options } from "./Options";
import { TextInput } from "./TextInput";

export const Form = ({ formHandle }) => {
  const [input, setInput] = useState("");
  const [engine, setEngine] = useState("text-curie-001");
  const [avatar, setAvatar] = useState("");

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        formHandle(input, engine, avatar);
      }}
    >
      <TextInput setInput={setInput} label="Write a thriller about" />
      <Options engine={engine} setEngine={setEngine} setAvatar={setAvatar} />
      <input className="form__submit" type="submit" />
    </form>
  );
};

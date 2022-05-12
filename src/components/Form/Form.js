import { useState } from "react";
import "./Form.scss";
import { Options } from "./Options";
import { TextInput } from "./TextInput";

export const Form = ({ formHandle }) => {
  const [input, setInput] = useState("");
  const [engine, setEngine] = useState("text-curie-001");

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        formHandle(input, engine);
      }}
    >
      <TextInput setInput={setInput} label="Write a thriller about: " />
      <Options engine={engine} setEngine={setEngine} />
      <input className="form__submit" type="submit" />
    </form>
  );
};

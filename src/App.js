import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form/Form";
import { Sketches } from "./components/Sketches/Sketches";
import axios from "axios";

import "./App.scss";

function App() {
  const [sketches, setSketches] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const getSketches = (input, engine, avatar) => {
    const prompt = `Write a thriller movie plot about ${input} in two sentences`;

    axios
      .post(
        `${API_URL}/${engine}/completions`,
        {
          prompt: prompt,
          max_tokens: 256,
          temperature: 0.9,
          top_p: 1,
          n: 1,
          stream: false,
          logprobs: null,
        },
        headers
      )
      .then(({ data }) => {
        data.prompt = prompt;
        data.engine = engine;
        data.avatar = avatar;
        setSketches([...sketches, data]);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <div className="App">
      <Header />
      <Form formHandle={getSketches} />
      <Sketches data={sketches} />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Card } from "../Card";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");

  const data = {
    id: "12312312",
    prompt: "hello",
    choices: ["what's up", "ayo", "wow"],
    created: 534534543345,
    engine: "text-curie-001",
    avatar: "../../assets/images/curie.png",
  };

  ReactDOM.render(<Card data={data} />, div);
});

it("renders correctly", () => {
  const data = {
    id: "wow-123123",
    prompt: "hello",
    choices: ["fdafafassf", "ayo", "wow"],
    created: 534534543345,
    engine: "text-davinci-002",
    avatar: "../../assets/images/davinci.png",
  };

  const { getByTestId } = render(<Card data={data} />);
  expect(getByTestId("card")).toBeTruthy();
});

it("renders correctly", () => {
  const data = {
    id: "opl123123",
    prompt: "roooo",
    choices: ["weaesa", "aadsasdasdyo", "dasasdadsasd", "dasadsasd"],
    created: 534534543345,
    engine: "text-babbage-001",
    avatar: "../../assets/images/babbage.png",
  };

  const { getByTestId } = render(<Card data={data} />);
  expect(getByTestId("card")).toBeTruthy();
});

it("matches snapshot", () => {
  const data = {
    id: "weeeee-123123",
    prompt: "roooo",
    choices: ["weaesa", "aadsasdasdyo", "dasasdadsasd", "dasadsasd"],
    created: 534534543345,
    engine: "text-ada-001",
    avatar: "../../assets/images/ada.png",
  };

  const tree = renderer.create(<Card data={data} />).toJSON();

  expect(tree).toMatchSnapshot();
});

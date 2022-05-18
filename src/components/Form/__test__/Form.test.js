import React from "react";
import { Form } from "../Form";
import {
  render,
  cleanup,
  waitFor,
  screen,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import user from "@testing-library/user-event";

afterEach(cleanup);

describe("<Form />", () => {
  // test # 1
  it("renders without error", () => {
    let component = renderer.create(<Form />);
    expect(component).toBeTruthy;
  });

  // test # 2
  it("matches snapshot", () => {
    let component = renderer.create(<Form />);
    expect(component).toMatchSnapshot();
  });

  const onSubmit = jest.fn();

  beforeEach(() => {
    onSubmit.mockClear();
    render(<Form formHandle={onSubmit} />);
  });

  // test # 3
  it("onSubmit to be called when input filled", async () => {
    user.type(getTextInput(), "Spaghetti");
    user.click(getButton());

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        "Spaghetti",
        "text-curie-001",
        "curie.png"
      );
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  // test # 4
  it("onSubmit not called when input empty regardless of selected option", () => {
    user.click(getButton());

    const dropdown = getDropdown();
    user.selectOptions(
      dropdown,
      within(dropdown).getByRole("option", { name: /count babbage/i })
    );

    expect(onSubmit).not.toHaveBeenCalled();
  });

  // test # 5
  it("onSubmit called with input filled and different dropdown option", async () => {
    user.type(getTextInput(), "dinosaurs");

    const dropdown = getDropdown();
    user.selectOptions(
      dropdown,
      within(dropdown).getByRole("option", { name: /davinci/i })
    );

    user.click(getButton());

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        "dinosaurs",
        "text-davinci-002",
        "davinci.png"
      );
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});

const getTextInput = () => {
  return screen.getByRole("textbox");
};

const getDropdown = () => {
  return screen.getByRole("combobox");
};

const getButton = () => {
  return screen.getByRole("button", {
    name: /submit/i,
  });
};

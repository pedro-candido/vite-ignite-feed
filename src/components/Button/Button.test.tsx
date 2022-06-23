import { fireEvent, render } from "@testing-library/react";
import Button from ".";

const mockedFunction = jest.fn();

describe("it should render a button", () => {
  it("should render a button", () => {
    const button = render(<Button onClick={mockedFunction}>Click me</Button>);
    expect(button).toMatchSnapshot();
  });
  it("should render and click in a button with a disabled attribute", () => {
    const { getByTestId } = render(
      <Button disabled onClick={mockedFunction}>
        Click me
      </Button>
    );

    const button = getByTestId("button_testId");
    fireEvent.click(button);

    expect(mockedFunction).not.toHaveBeenCalled();
  });
  it("should render and click in a button with a enabled attribute", () => {
    const { getByTestId } = render(
      <Button onClick={mockedFunction}>Click me</Button>
    );

    const button = getByTestId("button_testId");
    fireEvent.click(button);

    expect(mockedFunction).toHaveBeenCalled();
  });
});

import { render } from "@testing-library/react";
import App from "../App";

const app = render(<App />);

describe("Example", () => {
  it("simple test", () => {
    expect(1 + 1).toBe(2);
  });
});

expect(app).toMatchSnapshot();
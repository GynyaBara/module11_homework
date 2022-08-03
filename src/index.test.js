import { countDown } from "./index.js";

describe("test countDown", () => {
  it("count doun 4 3 2 1 ", () => {
    expect(countDown(4)).toBe(4, 3, 2, 1);
  });
});

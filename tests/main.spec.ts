import { describe, expect, it } from "@jest/globals";

describe("testing jest integration", () => {
  it("should be 2", () => {
    const sum = 1 + 1
    expect(sum).toBe(2)
  })
})

import { describe, expect, it } from "@jest/globals";

type Sender = {
  message: string;
};

describe("Base:Chat:Sender", () => {
  it("should return a schema with valid message text", () => {
    const sut: Sender = {
      message: "any_message",
    };

    expect(sut.message).toBe("any_message");
  });
});

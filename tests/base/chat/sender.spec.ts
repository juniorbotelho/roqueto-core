import { describe, expect, it } from "@jest/globals";

type Sender = {
  message: string;
};

const makeSut = () => {
  const sender = async (): Promise<Sender> => {
    return {
      message: "any_message",
    };
  };

  return {
    sender,
  };
};

describe("chat message sending function", () => {
  it("should return a schema with expected properties", () => {
    const sut = makeSut();

    const res = sut.sender();

    expect(res).resolves.toHaveProperty("message", "any_message");
  });
});

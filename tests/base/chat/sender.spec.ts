import { describe, expect, it } from "@jest/globals";

type SenderParam = {
  username: string;
  type: "chat" | "group";
  message: string;
  from: string;
  to: string;
};

type Sender = {
  message: string;
};

const sender = async (senderParam: SenderParam): Promise<Sender> => {
  try {
    if (senderParam.message.length <= 0) {
      throw new Error("The message parameter doesn't be empty");
    }
    return {
      message: "any_message",
    };
  } catch (error) {
    return error as Sender;
  }
};

const makeSut = () => {
  const senderMock = (senderMockParam?: Sender) => {
    const senderParam: SenderParam = {
      username: "any_username",
      message: "any_message",
      type: "chat",
      from: "any_from_id",
      to: "any_to_id",
    };
    return sender(Object.assign(senderParam, senderMockParam));
  };

  return {
    senderMock,
  };
};

describe("chat message sending function", () => {
  it("input invalid parameters must throw a error", async () => {
    const sut = makeSut();
    const res = await sut.senderMock({
      message: "",
    });
    expect(res).toBeInstanceOf(Error);
  });

  it("should return a schema with expected properties", async () => {
    const sut = makeSut();
    const res = await sut.senderMock();
    expect(res).toHaveProperty("message", "any_message");
  });
});

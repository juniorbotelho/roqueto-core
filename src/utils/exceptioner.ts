import { ValidationError } from "@/errors";

export class Exceptioner {
  static InvalidInputParam(param: Omit<ValidationError, "name">) {
    const defaultInput: Omit<ValidationError, "name"> = {
      message: "A validation error occurred.",
      action: "Adjust the submitted data and try again.",
      statusCode: param.statusCode ?? 400,
      context: param.context,
      errorLocationCode: param.errorLocationCode,
      key: param.key,
      type: param.type,
    };
    return new ValidationError(defaultInput);
  }
}

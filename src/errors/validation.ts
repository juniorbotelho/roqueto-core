import { BaseError } from "@/errors/base";

export class ValidationError extends BaseError {
  constructor({
    message,
    action,
    stack,
    statusCode,
    context,
    errorLocationCode,
    key,
    type,
  }: Omit<ValidationError, "name">) {
    super({
      name: ValidationError.name,
      message: message ?? "A validation error occurred.",
      action: action ?? "Adjust the submitted data and try again.",
      statusCode: statusCode ?? 400,
      stack: stack,
      context: context,
      errorLocationCode: errorLocationCode,
      key: key,
      type: type,
    });
  }
}

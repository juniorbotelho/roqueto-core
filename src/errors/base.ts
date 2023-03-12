import { v4 as uuid } from "uuid";

export class BaseError extends Error {
  public readonly message: string;
  public readonly action?: string;
  public readonly statusCode?: number;
  public readonly errorId?: string;
  public readonly requestId?: string;
  public context?: string;
  public errorLocationCode?: string;
  public key?: string;
  public type?: string;
  public readonly databaseErrorCode?: string;

  constructor({
    message,
    stack,
    action,
    statusCode,
    errorId,
    requestId,
    context,
    errorLocationCode,
    key,
    type,
    databaseErrorCode,
  }: BaseError) {
    super();
    this.name = this.constructor.name;
    this.message = message;
    this.action = action;
    this.statusCode = statusCode ?? 500;
    this.errorId = errorId ?? uuid();
    this.requestId = requestId;
    this.context = context;
    this.stack = stack;
    this.errorLocationCode = errorLocationCode;
    this.key = key;
    this.type = type;
    this.databaseErrorCode = databaseErrorCode;
  }
}

export class AppError extends Error {
  public statusCode: number;
  public details?: Object;

  constructor(message: string, statusCode: number, details?: Object) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;

    Error.captureStackTrace(this, this.constructor);
  }
}

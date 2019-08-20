import { Request, Response, NextFunction } from "express";
export interface CustomRequest extends Request {
  user?: string;
}

export interface CustomeReponse extends Response {}

export type CustomeRequestHandler = (
  req: CustomRequest,
  res: CustomeReponse,
  next: NextFunction
) => any;

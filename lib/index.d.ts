// Type definitions for express-validation
/// <reference types="node" />
import { RequestHandler } from "express";
import {
  ValidationOptions,
  ValidationError as JoiError,
  Root as joiRoot,
} from 'joi';

interface EvOptions {
  context?: boolean;
  keyByField?: boolean;
  statusCode?: number;
}

interface schema {
  [propName: string]: object | string;
}

interface errors {
  [propName: string]: JoiError[];
}

export declare const Joi: joiRoot;

export declare function validate(schema: schema, options?: EvOptions, joiRoot?: ValidationOptions, parameters?: string[]): RequestHandler;

export class ValidationError {
  name: string;
  message: string;
  statusCode: number;
  error: string;
  details: errors;
}

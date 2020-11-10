import { check } from 'express-validator';

export const createVideoValidator = [
  check('title').notEmpty().isString(),
  check('url').notEmpty().isString(),
];

export const updateVideoValidator = [
  check('title').notEmpty().isString(),
  check('url').notEmpty().isString(),
];

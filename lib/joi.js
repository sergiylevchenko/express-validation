const Joi = require('joi');

const schema = (parameters) => parameters
  .reduce((result, item) => ({ ...result, [item]: Joi.object() }), {});

const joiSchema = (params) => Joi.object(schema(params)).required().min(1);

const mergeJoiOptions = (joi, ctx = null, request) => {
  const context = ctx ? request : null;
  return { ...joi, warnings: true, context };
};

exports.joiSchema = joiSchema;
exports.mergeJoiOptions = mergeJoiOptions;

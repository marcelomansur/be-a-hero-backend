const { celebrate, Joi, Segments } = require("celebrate");

module.exports = {
  get() {
    return celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    });
  }
};

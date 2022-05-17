const Joi = require('joi');

module.exports = function() {

    /**
     * This function validate /randomize request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
    this.validateProduct = (body) => {
        const productSchema = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            description: Joi.string().max(500).required(),
            price: Joi.number().min(1).required(),
            countInStock: Joi.number().min(0).required(),
            imageUrl: Joi.string().required()
        });
        return productSchema.validate(body);
    }
}
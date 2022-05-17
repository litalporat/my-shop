const Joi = require('joi');

module.exports = function() {

    /**
     * This function validate a product request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
    this.validateProduct = (body) => {
        const schema = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            description: Joi.string().max(500).required(),
            price: Joi.number().min(1).required(),
            countInStock: Joi.number().min(0).required(),
            imageUrl: Joi.string().required()
        });
        return schema.validate(body);
    }

    /**
     * This function validate a product request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
     this.validateUser = (body) => {
        const schema = Joi.object({
            email: Joi
                .string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'il', 'io', 'co'] } })
                .required(),
            password: Joi
                .string()
                .required(),
        });
        return schema.validate(body);
    }

    /**
     * This function validate a token request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
     this.validateToken = (body) => {
        const schema = Joi.object({
            token: Joi.string().required()
        });
        return schema.validate(body);
    }
}
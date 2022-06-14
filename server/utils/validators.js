const Joi = require('joi');

module.exports = function() {

    /**
     * This function validate a product request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
    this.validateProduct = (body) => {
        const schema = Joi.object({
            displayName: Joi.string().min(2).max(30).required(),
            description: Joi.string().max(500).required(),
            price: Joi.number().min(1).required(),
            imgDisplay: Joi.number().min(0).required(),
            imgDetails: Joi.string().required(),
            stock: Joi.object().keys({
                xs: Joi.string(),
                s: Joi.string(),
                m: Joi.string(),
                l: Joi.string(),
                xl: Joi.string(),
                os: Joi.string()
            }).required(),
            color: Joi.array().items(Joi.string()).required(),
            discount: Joi.number().required(),
            type: Joi.string().required(),
            amountSold: Joi.number().required(),
        });
        return schema.validate(body);
    }

    /**
     * This function validate a location request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
    this.validateLocation = (body) => {
        const schema = Joi.object({
            name: Joi.string().min(2).max(50).required(),
            lat: Joi.number().required(),
            lng: Joi.number().required(),
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
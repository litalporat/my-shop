const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

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
            imgDisplay: Joi.array().required(),
            imgDetails: Joi.array().required(),
            stock: Joi.object().keys({
                xs: Joi.number(),
                s: Joi.number(),
                m: Joi.number(),
                l: Joi.number(),
                xl: Joi.number(),
                os: Joi.number()
            }).required(),
            color: Joi.array().items(Joi.string()).required(),
            discount: Joi.number(),
            type: Joi.string().required(),
            amountSold: Joi.number(),
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

    /**
     * This function validate an order request body.
     * @param {Object} body - request body to validate
     * @returns {Object} - Joi object with details of the validation.
     */
    this.validateOrder = (body) => {
        let product = Joi.object().keys({
            _id: Joi.objectId().required(),
            size: Joi.string().min(1).max(30).required(),
            quantity: Joi.number().required(),
            price: Joi.number().required(),
            img: Joi.string().required(),
        })
        const schema = Joi.object({
            firstName: Joi.string().min(2).max(30).required(),
            lastName: Joi.string().min(2).max(30).required(),
            country: Joi.string().min(2).max(30).required(),
            city: Joi.string().min(2).max(30).required(),
            address: Joi.string().min(2).max(30),
            zipCode: Joi.string().min(2).max(30),
            total: Joi.number().required(),
            products: Joi.array().items(product)
        });
        return schema.validate(body);
    }
}
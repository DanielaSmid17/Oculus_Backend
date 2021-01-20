const Joi = require('joi')

const userSchema = Joi.object({
    provider: Joi.string().required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
    password: Joi.string().required(),
    password2: Joi.ref('password')
})

const loginSchema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }).required(),
    password: Joi.string().required(),
})

const patientSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    id: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.string().valid("Female", "Male", "Other")

})

module.exports = { userSchema, loginSchema, patientSchema }
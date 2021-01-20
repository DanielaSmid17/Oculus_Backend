const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretTokenKey = process.env.SECRET_TOKEN_KEY


const createsignupToken = (email, provider) => {
    const token = jwt.sign(JSON.stringify({ email, provider }), secretTokenKey)
    return token
}

const createLoginToken = (email, id, provider) => {
    const token = jwt.sign(JSON.stringify({ email, id, provider }), secretTokenKey)
    return token
}


const verifyToken = async (token) => {
    try {
        await jwt.verify(token, secretTokenKey)
    } catch (err) {
        return err;
    }
}

module.exports = { createsignupToken, createLoginToken }
/*
 * Arquivo: auth.js
 * Autor: Paulo Alves
 * Descrição: responsável pela validação do token JWT para as rotas protegidas garantindo que a API esteja segura
 * Data: 27/11/2019
*/

const jwt = require('jsonwebtoken')
const env = require('../.env')

module.exports = (req, res, next) => {
    
    // CORS preflight request
    if (req.method === 'OPTIONS') {
        next()
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization']
        
        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] })
        }
        
        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                })
            } else {
                // req.decoded = decoded
                next()
            }
        })
    }
}
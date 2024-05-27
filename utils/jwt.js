import jwt from 'jsonwebtoken';
import {config} from '../config/env.js';


export const genToken = (payload) => {
    console.log(config.secret)
    return jwt.sign(payload, config.secret, {expiresIn: '1h'})
}
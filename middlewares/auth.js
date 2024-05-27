import jwt from 'jsonwebtoken';
import { config } from '../config/env.js';
 
export const auth = (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({error: 'unauthorized, not authHeader'});
    
    }
    console.log(authHeader)
    const token = authHeader.split(' ')[1];
    
    if(!token)
        {
        return res.status(401).json({error:'unauthorized, no token provided'});
    }
    jwt.verify(token,config.secret, (err,user) => {
        if (err) {
            // console.log(config.secret)
            console.log(err)
            return res.status(403).json({error: 'Forbidden you cant access this endpoint'});
        };
        req.user = user;

        next();
    })
}
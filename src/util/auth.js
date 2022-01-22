const jwt = require("jsonwebtoken")
const User = require("../models/user");

function newToken(user) {
    return jwt.sign({id: user.UserId}, 'ecommerce', {
        expiresIn: '10d'
    });
}

function verifyToken(token) {
    try {
        let response = jwt.verify(token, 'ecommerce');
        let createdAt = new Date(response.iat * 1000).toString();
        let expiresAt = new Date(response.exp * 1000).toString();
        
        return {
            id: response.id,
            createdAt: createdAt,
            expiresAt: expiresAt
        };
    } catch(err) {
        console.log(err);
        return;
    }
}

let str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDE3MDMyOTAsImV4cCI6MTY0MjU2NzI5MH0.hDiDPukhJ2PBZLHr-YkkOQUK2XRpoFUD80C-5NLu1QI";
console.log(verifyToken(str));
module.exports = {newToken, verifyToken};
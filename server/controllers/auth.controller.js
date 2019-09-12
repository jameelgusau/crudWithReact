import User from '../models/user.model'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from './../../config/config'




const signin = (req, res) => {
    User.findOne({email: req.body.email }, function(err, user) {
        if (err) throw err;
    
        // test a matching password
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch);
            const token = jwt.sign({      
                _id: user._id    
            }, config.jwtSecret)    
            res.cookie("t", token, {      
                
                expire: new Date() + 9999   
             })
            return res.json({ 
                token,     
                user: {_id: user._id, name: user.name, email: user.email}
                }) // -> Password123: true
        });
    
        // test a failing password
    //     user.comparePassword('123Password', function(err, isMatch) {
    //         if (err) throw err;
    //         console.log('123Password:', isMatch); // -> 123Password: false
    //     });
 });
}
  
const signout = (req, res) => {  
    res.clearCookie("t")  
    return res.status('200').json({    
        message: "signed out"  
    })
}
const requireSignin = expressJwt({  
    secret: config.jwtSecret,  
    userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {  
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id  
    if (!(authorized)) {    
        return res.status('403').json({      
            error: "User is not authorized"    
        })  
    }  
    next()
}

export default { signin,  signout, requireSignin,  hasAuthorization }
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
var SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({ 
    name: {   
        type: String,   
        trim: true,   
        required: 'Name is required' 
    },
    email: {  
        type: String,  
        trim: true,  
        unique: 'Email already exists',  
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],  
        required: 'Email is required'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: Date,
    password: {    
        type: String,    
        required: "Password is required"
    },
    // salt: String
})

// UserSchema
//   .virtual('this.password')
//   .set(function(password) {    
//     this._password = password    
//     this.salt = this.makeSalt()    
//     this.password = this.encryptPassword(password)  
// })
//   .get(function() {
//     return this._password
// })

// UserSchema.methods = {   
//     authenticate: function(plainText) {    
//         return this.encryptPassword(plainText) === this.password
//     },
//     encryptPassword: function(password) {
//       if (!password) return ''
//       try {
//         return crypto
//           .createHmac('sha1', this.salt)
//           .update(password)
//           .digest('hex')
//       } catch (err) {
//         return ''
//       }
//     },
//     makeSalt: function() {
//       return Math.round((new Date().valueOf() * Math.random())) + ''
//   }
// }

UserSchema.virtual('isLocked').get(function() {
  // check for a future lockUntil timestamp
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

UserSchema.pre('save', function(next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);

      // hash the password using our new salt
      bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) return next(err);

          // set the hashed password back on our user document
          user.password = hash;
          console.log(user.password)
          next();
      });
  });

});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

UserSchema.methods.incLoginAttempts = function(cb) {
  // if we have a previous lock that has expired, restart at 1
  if (this.lockUntil && this.lockUntil < Date.now()) {
      return this.update({
          $set: { loginAttempts: 1 },
          $unset: { lockUntil: 1 }
      }, cb);
  }
  // otherwise we're incrementing
  var updates = { $inc: { loginAttempts: 1 } };
  // lock the account if we've reached  attempts and it's not locked already
  if (this.loginAttempts + 1 >= MAX_LOGmaxIN_ATTEMPTS && !this.isLocked) {
      updates.$set = { lockUntil: Date.now() + LOCK_TIME };
  }
  return this.update(updates, cb);
};

// expose enum on the model, and provide an internal convenience reference 
var reasons = UserSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 10,
  MAX_ATTEMPTS: 10
};

UserSchema.statics.getAuthenticated = function(username, password, cb) {
 
};
export default mongoose.model('User', UserSchema) 
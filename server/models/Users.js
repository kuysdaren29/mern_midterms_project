const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator')

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
});

UserSchema.statics.signup = async function(username, email, password) {
      
    if(!username|| !email || !password) {
       throw Error('Please Provide your details')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }
     const exist = await this.findOne({ email })

      if (exist) {
        throw Error('Email already exist')
      }
    
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)

      const user = await this.create({ username, email, password: hash })

      return user
}
   UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    
    if(!email|| !password) {
        throw Error('Please Provide your details')
     }
    if (!user) {
      throw Error('Incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect Password')
    }
    return user 
   }

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const saltRounds = Number(process.env.SALTROUNDS) || 7;

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  
  },
  username: {
    type: String,
    required: true,
    minlength: [5, "Username should be at least 5 characters"],
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9]+/g.test(v);
      },
      message: (props) =>
        `${props.value} must contains only latin letters and digits!`,
    },
    unique: true,
  },
  
  password: {
    type: String,
    required: true,
    minlength: [6, "Password should be at least 6 characters"],
    validate: {
      validator: function (v) {
        return /[a-zA-Z0-9]+/g.test(v);
      },
      message: (props) =>
        `${props.value} must contains only latin letters and digits!`,
    },
  },
 
  role : {
    type:String,
    enum:['admin', 'user'],
    default:'user'
  }
 
});

userSchema.methods = {
  matchPassword: function (password) {
    return bcrypt.compare(password, this.password);
  },
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        next(err);
      }
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }
        this.password = hash;
        next();
      });
    });
    return;
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
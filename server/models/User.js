const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate: isEmail
  },
  password: {
      type: String,
      required: true,
      minlength: 6
  }
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password);
    next();
})

const User = mongoose.model("user", userSchema);

module.exports = User;

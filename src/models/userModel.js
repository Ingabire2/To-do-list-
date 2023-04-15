import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  role:{
    type:String,
    enum:["Admin","Client"],
    default:"Client"
  },

}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);

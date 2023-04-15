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

  password: {
    type: String,
  },
  

}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);

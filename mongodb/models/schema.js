import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true }, // Add this field
});

const User = mongoose.model('User', userSchema);

export { User };
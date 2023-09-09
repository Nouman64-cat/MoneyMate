import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../mongodb/models/schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare the input password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Authentication successful
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;

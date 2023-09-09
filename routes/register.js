import express from 'express';
import bcrypt from 'bcrypt'; // Import bcrypt
import { User } from '../mongodb/models/schema.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { fullName, email, password, username } = req.body;

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create the user with the hashed password
    const user = await User.create({ fullName, email, password: hashedPassword, username });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error });
  }
});

export default router;


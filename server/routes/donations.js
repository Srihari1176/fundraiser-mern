import { Router } from 'express';
import Donation from '../models/Donation.js';

const router = Router();

// Create
router.post('/', async (req, res) => {
  try {
    const { amount, description, name } = req.body;
    if (!amount || !description) {
      return res.status(400).json({ error: 'amount and description are required' });
    }
    const donation = await Donation.create({ amount, description, name });
    res.status(201).json(donation);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// List
router.get('/', async (_req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 }).limit(200);
    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
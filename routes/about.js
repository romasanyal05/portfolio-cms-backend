const express = require('express');
const router = express.Router();
const About = require('../models/About');

// GET about data
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE / UPDATE about data
router.post('/', async (req, res) => {
  try {
    const existing = await About.findOne();
    if (existing) {
      const updated = await About.findByIdAndUpdate(
        existing._id,
        req.body,
        { new: true }
      );
      res.json(updated);
    } else {
      const about = new About(req.body);
      await about.save();
      res.json(about);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;

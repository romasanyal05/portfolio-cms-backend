const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// GET all experience
router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find().sort({ createdAt: -1 });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE experience
router.post('/', async (req, res) => {
  try {
    const newExp = new Experience(req.body);
    const savedExp = await newExp.save();
    res.status(201).json(savedExp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE experience
router.put('/:id', async (req, res) => {
  try {
    const updatedExp = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExp) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json(updatedExp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE experience
router.delete('/:id', async (req, res) => {
  try {
    const deletedExp = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExp) {
      return res.status(404).json({ message: 'Experience not found' });
    }
    res.json({ message: 'Experience deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

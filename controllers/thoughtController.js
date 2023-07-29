const Thought = require('../models/thought');

const thoughtController = {
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createThought: async (req, res) => {
    try {
      const { thoughtText, username } = req.body;
      const thought = await Thought.create({ thoughtText, username });
      res.json(thought);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = thoughtController;

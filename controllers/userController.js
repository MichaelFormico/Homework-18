const User = require('../models/user');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },

  createUser: async (req, res) => {
    try {
      // const { username, email } = req.body;
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = userController;

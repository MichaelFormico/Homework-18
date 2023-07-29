const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
     mongoose.connect('mongodb://127.0.0.1:27017/social-network-db', {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

module.exports = mongoose.connection;

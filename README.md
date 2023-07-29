Social Network API
This is a backend API for a social networking web application where users can share their thoughts, react to friends' thoughts, and manage their friend lists. The API is built using Express.js, MongoDB, and the Mongoose ODM.

Features
User registration and authentication with secure password hashing
CRUD operations for thoughts (create, read, update, delete)
Reactions to thoughts (like, dislike, etc.)
Managing friend lists (sending friend requests, accepting/declining requests, removing friends)
Timeline showing thoughts from the user and their friends
Error handling and validation for data consistency
Proper security measures to protect routes
Technologies Used
Node.js
Express.js
MongoDB (with Mongoose ODM)
JavaScript date library (or native JavaScript Date object) for timestamp formatting
Additional dependencies can be found in the package.json file
Installation
Clone the repository to your local machine using Git.
Navigate to the project directory.
Install the dependencies using npm:
bash
Copy code
npm install
Configure your MongoDB connection in the .env file. (Create a .env file based on the provided .env.example template and add your MongoDB URI.)
Usage
To start the server and sync Mongoose models to the MongoDB database, use the following command:

bash
Copy code
npm start
The server will be running on http://localhost:3000/ by default.

API Endpoints
The API endpoints and their functionalities are as follows:

User Routes
POST /api/users: Register a new user
POST /api/users/login: Authenticate user and receive an access token
GET /api/users/:userId: Get user by ID
PUT /api/users/:userId: Update user profile
DELETE /api/users/:userId: Delete user account
Thought Routes
GET /api/thoughts: Get all thoughts
GET /api/thoughts/:thoughtId: Get thought by ID
POST /api/thoughts: Create a new thought
PUT /api/thoughts/:thoughtId: Update a thought
DELETE /api/thoughts/:thoughtId: Delete a thought
Reaction Routes
POST /api/thoughts/:thoughtId/reactions: Create a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Delete a reaction to a thought
Friend Routes
POST /api/users/:userId/friends/:friendId: Add a friend
DELETE /api/users/:userId/friends/:friendId: Remove a friend
Walkthrough Video
Link to the Walkthrough Video

[Include the link to the video showcasing the functionality of the API here.]

Contributing
Contributions are welcome! If you find any issues or want to enhance the API, feel free to open a pull request.
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
},
{
  timestamps: true,
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;





























import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

const UserInfo = () => {
  const { data, loading, error } = useQuery(QUERY_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { user } = data;
  const { posts } = user;

  return (
    <div className="bg-gray-200 min-h-full">
      <div className="mx-auto grid md:grid-cols-2 gap-4">
        {/* User Information */}
        <div className="bg-gray rounded-lg flex justify-center pt-20 max-h-96">
          <div className="bg-white rounded-3xl max-w-2xl container relative py-10">
            <p className="text-blue-900 text-center text-3xl font-bold">
              {user.firstName} {user.lastName}
            </p>
            <p className="text-blue-900 text-center">
              <strong>Email:</strong>
            </p>
            <p className="text-gray-700 text-center">{user.email}</p>
            <p className="text-blue-900 text-center">
              <strong>Website:</strong>
            </p>
            <p className="text-gray-700 text-center">{user.website}</p>
            <p className="text-blue-900 text-center">
              <strong>LinkedIn:</strong>
            </p>
            <p className="text-gray-700 text-center">{user.linkedin}</p>
            <p className="text-blue-900 text-center">
              <strong>GitHub:</strong>
            </p>
            <p className="text-gray-700 text-center">{user.github}</p>
          </div>
        </div>

        {/* Posts */}
        <div className="grid gap-4 p-20">
          {user.posts.map((post) => (
            <div
              key={post._id}
              className="post-card bg-white shadow-lg rounded-lg my-4"
            >
              <div className="px-4 py-2">
                <p className="text-gray-700">{post.createdAt}</p>
                <p className="mt-3 text-gray-700 text-sm">{post.postText}</p>
                <div className="mt-4 flex items-center">
                  {/* Rest of the component code for the posts */}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex mr-2 text-gray-700 text-sm mr-3">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    {/* Rest of the SVG code */}
                  </svg>
                  <span>12</span>
                </div>
                <div className="flex mr-2 text-gray-700 text-sm mr-8">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    {/* Rest of the SVG code */}
                  </svg>
                  <span>8</span>
                </div>
                <div className="flex mr-2 text-gray-700 text-sm mr-4">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 mr-1"
                    stroke="currentColor"
                  >
                    {/* Rest of the SVG code */}
                  </svg>
                  <span>share</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

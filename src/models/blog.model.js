import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  username: String,
  profilePic: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const blogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  profilePic: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
});

export default mongoose.model("Blog", blogSchema); 
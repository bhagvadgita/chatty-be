import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { username, profilePic, content } = req.body;
    if (!username || !profilePic || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const blog = new Blog({ username, profilePic, content });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to create blog" });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(
      id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to like blog" });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, profilePic, content } = req.body;
    if (!username || !profilePic || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const blog = await Blog.findByIdAndUpdate(
      id,
      { $push: { comments: { username, profilePic, content } } },
      { new: true }
    );
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Failed to add comment" });
  }
}; 
import express from "express";
import { getAllBlogs, createBlog, likeBlog, addComment } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", createBlog);
router.patch("/:id/like", likeBlog);
router.post("/:id/comment", addComment);

export default router; 
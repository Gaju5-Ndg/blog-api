import express from "express";
import blogController from "../controlllers/blogController";
const blogRoutes = express()

blogRoutes.post("/create", blogController.createPost)
blogRoutes.get("/post/:_id", blogController.getPostById)
blogRoutes.get("/allPost",blogController.getAllPost)
blogRoutes.delete('/deletePost/:_id',blogController.deletePost)
blogRoutes.put("/updatePost/:_id", blogController.updatePost)

export default blogRoutes

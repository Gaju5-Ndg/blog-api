import Blog from "../models/Blog"

class blogController {
    static async createPost(req, res) {

        try {
            const blog = await Blog.create({
                title: req.body.title,
                description: req.body.description,
                like: req.body.like
            })

            return res.status(201).json({ message: "post created", blog })
        } catch (error) {
            console.log(error);
            return res.status(400).json({ error: error.message })
        }
    }
    static async getPostById(req, res) {
        try {
            const id = req.params._id
            const blog = await Blog.findById(id)
            return res.status(201).json({ message: "post retrived", blog })
        } catch (error) {
            console.log(error);
            return res.status(404).json({ error: error.message })
        }
    }
    static async getAllPost(req, res) {
        try {
            const blog = await Blog.find({})
            return res.status(201).json(blog)
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }

    static async deletePost(req, res) {
        try {
            const id = req.params._id
            const blog = await Blog.findByIdAndDelete(id)
            return res.status(201).json({ message: "Post deleted", blog })
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
    static async updatePost(req, res) {
        try {
            const id = req.params._id
            const blog = await Blog.findByIdAndUpdate(
                id,
                {
                    $set: req.body,
                },
                { new: true }
            )
            return res.status(201).json({ message: "Post updated", blog })
        } catch (error) {
            return res.status(400).json({ error: error.message })
        }
    }
}

export default blogController

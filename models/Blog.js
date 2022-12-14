import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    like: { type: String },
}, {
    timestamps: true
}
)

const Blog = mongoose.model("blogs", blogSchema)
export default Blog
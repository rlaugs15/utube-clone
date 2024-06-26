import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: { type: String, require: true },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    videos: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Video' },
    createdAt: { type: Date, required: true, default: Date.now },
})

const Comment = mongoose.model('Comment', commentSchema)
export default Comment
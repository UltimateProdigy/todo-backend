const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            unique: true,
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);

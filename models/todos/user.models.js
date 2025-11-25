import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: [true, "Password must be at least 6 characters"],
            minlength: 6,
            maxlenghth: 11,
        },
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    pincode: String,
    contact: String,
    password: String,
});

export const officials = mongoose.models.officials || mongoose.model('officials', schema);
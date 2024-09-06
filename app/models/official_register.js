import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    password: String,
    pincode: String,
});

export const officials_register = mongoose.models.officials_register || mongoose.model('officials_register', schema);
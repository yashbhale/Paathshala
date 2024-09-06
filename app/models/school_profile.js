import mongoose from "mongoose";

const schema = new mongoose.Schema({
    udise: String,
    pincode: String,
    password: String,
    officialid: { type: String, required: true }, // Ensure the schema includes this field
});

export const schoolprofile1 = mongoose.models.schoolprofile1 || mongoose.model('schoolprofile1', schema);

'use server'

import mongoose from "mongoose";
import { officials } from "../models/officials";
import { officials_register } from "../models/official_register";
import { schoolprofile1 } from "../models/school_profile";

let isConnected = false;  // Track connection state

export const connectToDB = async () => {
    if (isConnected) return; // Avoid unnecessary reconnections

    try {
        await mongoose.connect("mongodb://localhost:27017/sih24", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

export const officials_data = async (formData) => {
    try {
        await connectToDB();
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            pincode: formData.get('pincode'),
            contact: formData.get('contact'),
            password: formData.get('password'),
        };

        console.log("This is data : ", data)

        const find = await officials.findOne(
            {
                email: { $regex: data.email, $options: 'i' }
            }
        )

        if (!find) {
            const user = new officials(data);
            await user.save();

            return 1;
        }
        else {
            return 2;
        }

    } catch (error) {
        console.log(error);
        return 0;
    }
}

export const officials_register_data = async (formData) => {
    try {
        await connectToDB();
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            contact: formData.get('contact'),
            password: formData.get('password'),
            pincode: formData.get('pincode'),
        };

        console.log("data 1 : ", data);

        const pass1 = formData.get('password1');

        console.log("This is data : ", data, pass1);

        const find = await officials.findOne(
            {
                email: { $regex: data.email, $options: 'i' },
                password: pass1,
                pincode: data.pincode,
            }
        )

        if (find) {
            const user = new officials_register(data);
            await user.save();

            return { pincode: find.pincode, oid: find._id };
        }
        else {
            return 2;
        }

    } catch (error) {
        console.log(error);
        return 0;
    }
}

export const checkofficialdata = async (data) => {
    try {
        await connectToDB();
        console.log(data, data.email, data.password, "Checking official data");


        const list = data;

        const find = await officials_register.findOne({
            email: { $regex: list.email, $options: 'i' },
            password: list.password // Ensure passwords are hashed in production
        });

        // Return pincode if found, or return 2 if not found
        if (find) {
            return { pincode: find.pincode, oid: find._id };
        } else {
            return 2;
        }
    } catch (error) {
        console.error("Error checking official data:", error); // Log error for debugging
        return 0; // Return 0 in case of an error
    }
};


export const schoolprofilecheck = async (list) => {
    try {
        const { formData, oid } = list;
        await connectToDB();
        console.log(formData, oid, "Checking official data");

        const data = {
            udise: formData.get('udise'),
            pincode: formData.get('pincode'),
            password: formData.get('password'),
            officialid: oid,
        };

        console.log(data, "School profile data to be checked");

        const find = await schoolprofile1.findOne({ udise: data.udise });

        if (!find) {
            const user = new schoolprofile1(data);
            console.log(user, "New user profile to be saved");
            await user.save(); // Ensure the save operation is awaited
            console.log("New school profile saved successfully");
            return 1;
        } else {
            console.log("School profile already exists:", find);
            return 2;
        }
    } catch (error) {
        console.error("Error checking official data:", error);
        return 0;
    }
};



export const checkschooldata = async (formData) => {
    try {
        await connectToDB();
        console.log(formData, "Checking official data");

        const data = {
            udise: formData.get('udise'),
            password: formData.get('password'),
        }

        console.log(data, " school datammmmmmmmmmmmmmmmmmmmmmmmmmmmm")


        const find = await schoolprofile.findOne({
            udise: data.udise,
            password: data.password,
        });

        if (find) {
            return find.pincode;
        } else {
            return 2;
        }
    } catch (error) {
        console.error("Error checking official data:", error); // Log error for debugging
        return 0; // Return 0 in case of an error
    }
};

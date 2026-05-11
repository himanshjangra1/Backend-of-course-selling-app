const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema ({
    email: {type: String, unique: true}, // Make email unique to avoid duplicate entries
    password: String,
    firstName: String,
    lastName: String
});

const adminSchema = new Schema ({
    email: {type: String, unique: true}, // Make email unique to avoid duplicate entries
    password: String,
    firstName: String,
    lastName: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
});

// Create models for User, Admin, Course, and Purchase using the respective schemas
const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

// Export the userModel, adminModel, courseModel, and purchaseModel to be used in other files
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}
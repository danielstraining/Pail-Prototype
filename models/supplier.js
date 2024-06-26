import { Schema, model, models } from "mongoose";

const supplierSchema = new Schema({
    name: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true, // Ensures uniqueness of the email
        required: true, // Email is required
    },
    password: {
        type: String,
        required: true, // Password is required
        minlength: 8, // Example: Minimum length of 6 characters
    },
    active: {
        type: Boolean,
        default: false, // Defaults to false if not provided
    },
    createdAt: {
        type: Date,
        default: Date.now, // Defaults to the current timestamp when the document is created
    },
    updatedAt: {
        type: Date,
        default: Date.now, // Defaults to the current timestamp when the document is created
    }
});

supplierSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

const Supplier = models.Supplier || model("Supplier", supplierSchema)

export default Supplier;
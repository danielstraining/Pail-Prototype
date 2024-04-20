import { Schema, model, models } from "mongoose";

const activationTokenSchema = new Schema({
    email: {
        type: String,
        unique: true, // Ensures uniqueness of the email
        required: true, // Email is required
    },
    token: {
        type: String,
        required: true, // Token is required
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

activationTokenSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

const ActivationToken = models.ActivationToken || model("ActivationToken", activationTokenSchema)

export default ActivationToken;
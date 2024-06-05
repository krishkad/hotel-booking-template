import mongoose, { model, models } from "mongoose";


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ADMIN: {
        type: Boolean,
        default: false
    }
});

const User = models?.user || model('user', userSchema);

export default User;
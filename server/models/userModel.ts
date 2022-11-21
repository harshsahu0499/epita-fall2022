import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, 'Enter an email'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Enter your password'],
        trim: true,
        min:[6, "You password has to be at least 6 charaters"]
    },
}, {
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export default mongoose.model('User', userSchema)
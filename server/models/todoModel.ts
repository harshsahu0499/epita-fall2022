import { Schema, model } from 'mongoose'
import { describe } from 'node:test';

const userSchema = new Schema({
    label:{
        type: String
    
}, 
description: {
    type: String,
    required: false,
    trim: true,
}

});

export default model('Todo', userSchema);
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    submissions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission"
    },
})

module.exports = mongoose.Model("User", userSchema);
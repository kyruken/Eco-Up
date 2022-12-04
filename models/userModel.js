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
    submissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission"
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission",
        isAnswered: {
            type: Boolean
        }
    }],
})

module.exports = mongoose.model("User", userSchema);
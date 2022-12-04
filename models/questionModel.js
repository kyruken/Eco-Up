const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    submissions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Submission"
    }],
})

module.exports = mongoose.model("Question", questionSchema);
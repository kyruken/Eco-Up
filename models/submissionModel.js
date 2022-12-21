const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    //Will figure out how to connect a user with a submission later
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Submission", submissionSchema);
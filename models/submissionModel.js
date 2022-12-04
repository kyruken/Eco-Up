const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    //Will figure out how to connect a user with a submission later
    // username: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    answer: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Submission", submissionSchema);
const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

module.exports = mongoose.Model("Submission", submissionSchema);
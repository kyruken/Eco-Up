const express = require('express');

const router = express.Router();

const Question = require('../models/questionModel');
const User = require('../models/userModel');
const Submission = require('../models/submissionModel');

//CRUD Operations
//Questions
router.get('/questions', (req, res) => {
    Question.where('_id')
    .exec((err, questions) => {
        if (err) {
            res.sendStatus(404);
        }

        res.json({questions})
    })
})

router.get('/questions/:questionId', (req, res) => {
    Question.findById(req.params.questionId, (err, question) => {
        if (err) {
            res.sendStatus(404);
        }

        res.json({question});
    })
})

router.post('/questions', (req, res) => {

    const newQuestion = new Question({
        title: req.body.title,
        description: req.body.description,
        submissions: []
    })

    newQuestion.save();

    res.json({newQuestion})
})

router.put('/questions/:questionId', (req, res) => {
    Question.findById(req.params.questionId, (err, question) => {
        if (err) {
            res.sendStatus(404);
        }

        const newQuestion = new Question({
            _id: req.params.questionId,
            title: req.body.title,
            description: req.body.description,
            submissions: typeof question.submissions !== 'undefined' ? [] : question.submissions
        })

        Question.findByIdAndUpdate(req.params.questionId, newQuestion, (err) => {
            if (err) {
                res.sendStatus(404);
            }
    
            res.sendStatus(200);
        })
    
    })
})

router.delete('/questions/:questionId', (req, res) => {
    Question.findByIdAndDelete(req.params.questionId, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        res.sendStatus(200);
    })
})

//Submissions
router.get('/questions/:questionId/submissions', (req, res) => {
    Submission.where('_id')
    .exec((err, submissions) => {
        if (err) {
            res.sendStatus(400);
        }

        res.json({submissions});
    })
})

router.get('/questions/:questionId/submissions/:submissionId', (req, res) => {
    Submission.findById(req.params.submissionId, (err, submission) => {
        if (err) {
            res.sendStatus(404);
        }
        
        res.json({submission});
    })
})

router.post('/questions/:questionId/submissions', (req, res) => {
    const newSubmission = new Submission({
        username: req.body.username,
        answer: req.body.answer
    })

    newSubmission.save();

    res.sendStatus(200);
})

router.put('/questions/:questionId/submissions/:submissionId', (req, res) => {
    Submission.findById(req.params.submissionId, (err, submission) => {
        if (err) {
            res.sendStatus(404);
        }

        const newSubmission = new Submission({
            _id: req.params.submissionId,
            username: req.body.username,
            answer: req.body.answer
        })

        Submission.findByIdAndUpdate(req.params.submissionId, newSubmission, (err) => {
            if (err) {
                res.sendStatus(404);
            }
    
            res.sendStatus(200);
        })
    })
})

router.delete('/questions/:questionId/submissions/:submissionId', (req, res) => {
    Submission.findByIdAndDelete(req.params.submissionId, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        res.sendStatus(200);
    })
})

//Users
router.get('/users', (req, res) => {
    User.where('_id')
    .exec((err, users) => {
        if (err) {
            res.sendStatus(404);
        }
        
        res.json({users});
    })
})

router.get('/users/:userId', (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) {
            res.sendStatus(404);
        }

        res.json({user});
    })
})

router.post('/users', (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        submissions: [],
        questions: []
    })

    newUser.save();
    res.sendStatus(200);
})

// router.put('/users/:userId', (req, res) => {
//     User.findById(req.params.userId, (err, user) => {
//         if (err) {
//             res.sendStatus(400);
//         }

//         const newUser = new User({
//             username: req.body.username,
//             password: req.body.password,
//             email: req.body.email,
//             submissions: user.submissions,
//             questions: user.questions
//         })

//         User.findByIdAndUpdate(req.params.userId, newUser, (err) => {
//             if (err) {
//                 res.sendStatus(404);
//             }

//             res.sendStatus(200);
//         })
//     })
// })

router.delete('/users/:userId', (req, res) => {
    User.findByIdAndDelete(req.params.userId, (err) => {
        if (err) {
            res.sendStatus(404);
        }
        res.sendStatus(200);
    })
})

module.exports = router;


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
    res.json({message: "Get all submissions!"})
})

router.get('/questions/:questionId/submissions/:submissionId', (req, res) => {
    res.json({message: "Get a submission!"})
})

router.post('/questions/:questionId/submissions', (req, res) => {
    res.json({message: "Create a submission!"})
})

router.put('/questions/:questionId/submissions', (req, res) => {
    res.json({message: "Update a question!"})
})

router.delete('/questions/:questionId/submissions/:submissionId', (req, res) => {
    res.json({message: "Delete a question!"})
})

//Users
router.get('/users', (req, res) => {
    res.json({message: "Get all users!"})
})

router.get('/users/:userId', (req, res) => {
    res.json({message: "Get a user!"})
})

router.post('/users', (req, res) => {
    res.json({message: "Create a user!"})
})

router.put('/users/:userId', (req, res) => {
    res.json({message: "Update a user!"})
})

router.delete('/users/:userId', (req, res) => {
    res.json({message: "Delete a user!"})
})

module.exports = router;


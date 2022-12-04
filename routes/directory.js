const express = require('express');

const router = express.Router();

//CRUD Operations
//Questions
router.get('/questions', (req, res) => {
    res.json({message: "Get all questions!"})
})

router.get('/questions/:questionId', (req, res) => {
    res.json({message: "Get a question!"})
})

router.post('/questions', (req, res) => {
    res.json({message: "Create a question!"})
})

router.put('/questions/:questionId', (req, res) => {
    res.json({message: "Update a question!"})
})

router.delete('/questions/:questionId', (req, res) => {
    res.json({message: "Delete a question!"})
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


import express from 'express';
import wrongAnswer from '../controllers/answer/answerQuestion.js';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/wronganswer', wrongAnswer)

export default router
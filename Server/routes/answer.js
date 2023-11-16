import express from 'express';
import wrongAnswer from '../controllers/answer/wrongAnswer.js';
import submitAnswer from '../controllers/answer/submitAnswer.js';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/wronganswer', wrongAnswer)
router.post('/submitanswer', submitAnswer)

export default router
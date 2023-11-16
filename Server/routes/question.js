import express from 'express';
import generateQuestion from '../controllers/question/generateQuestion.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/question', generateQuestion)

export default router
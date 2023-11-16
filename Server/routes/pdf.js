import express from 'express';
import parsePDF from '../controllers/pdf/parsePDF';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/pdf', parsePDF)

export default router
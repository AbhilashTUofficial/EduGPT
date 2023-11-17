import express from 'express';
import fetchURL from '../controllers/notification/fetchURL.js';
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.get('/notification', fetchURL)

export default router
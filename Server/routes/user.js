import express from 'express';
import insertUser from '../controllers/user/insertUser.js';
import setName from '../controllers/user/setName.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/login', insertUser)
router.post('setname', setName)

export default router
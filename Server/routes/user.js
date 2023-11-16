import express from 'express';
import insertUser from '../controllers/user/insertUser.js';
import setData from '../controllers/user/setData.js'
import fetchUsers from '../controllers/user/fetchUsers.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post('/login', insertUser)
router.post('/setdata', setData)
router.get('/user', fetchUsers)

export default router
import admin from '../../config/firebase-config.js'
import {getFirestore} from 'firebase-admin/firestore'

const db = getFirestore();

const insertUser = async(req, res) => {
    try {
        const phone = req.body.phone
        console.log(req.body.uid, phone)
        const studentRef = db.collection('students').doc(req.body.uid);
        const studentGet = await studentRef.get();
        if(studentGet.data()){
            res.json({exists: 1, message: "User already exists"})
        }else{
            await studentRef.set({
                name: '',
                type: 0, // 0 for uni, 1 for teacher, 2 for student
                phone: req.body.phone,
                class: '',
                points: {}
            })
            res.json({exists: 0, message: "User created"})
        }
    } catch (error) {
        console.log(error)
    }
}

export default insertUser
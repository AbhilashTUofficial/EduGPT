import admin from '../../config/firebase-config.js'
import {getFirestore} from 'firebase-admin/firestore'

const db = getFirestore();

const insertUser = async(req, res) => {
    try {
        const studentRef = db.collection('students').doc(req.body.uid);
        const studentGet = await studentRef.get();
        const studentData = studentGet.data();
        if(studentData){
            res.json({exists: 1, message: "User already exists"})
        }else{
            await studentRef.set({
                name: '',
                type: 0, // 0 for student, 1 for teacher
                phone: req.body.phone,
                points: {}
            })
            res.json({exists: 0, message: "User created"})
        }
    } catch (error) {
        console.log(error)
    }
}

export default insertUser
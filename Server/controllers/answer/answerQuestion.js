import admin from '../../config/firebase-config.js'
import {getFirestore} from 'firebase-admin/firestore'

const db = getFirestore();

const wrongAnswer = async (req, res) => {
    try {
        const { question, uid, classId } = req.body;
        const studentRef = firestore.collection('students').doc(uid);
        const classRef = firestore.collection('classes').doc(classId);
        const studentDoc = await studentRef.get();
        const classDoc = await classRef.get();
        const student = studentDoc.data();
        const classData = classDoc.data();
        let questions = []
        if (student.questions) {
            questions = [...student.questions, question];
        }else{
            questions = [question];
        }
        
        studentRef.set({questions})
    } catch (error) {
        
    }
}

export default wrongAnswer
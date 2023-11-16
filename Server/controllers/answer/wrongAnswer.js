import admin from '../../config/firebase-config.js'
import {getFirestore} from 'firebase-admin/firestore'

const db = getFirestore();

const wrongAnswer = async (req, res) => {
    try {
        const { question, uid, classId } = req.body;
        const studentRef = db.collection('students').doc(uid);
        const classRef = db.collection('classes').doc(classId);
        const studentDoc = await studentRef.get();
        const classDoc = await classRef.get();
        const student = studentDoc.data();
        const classData = classDoc.data();
        let wrongquestions = []
        if (student.questions) {
            wrongquestions = [...student.wrongquestions, question];
        }else{
            wrongquestions = [question];
        }
        
        if (classData.questions) {
            wrongquestions = [...classData.questions, question];
        }else{
            wrongquestions = [question];
        }
        await classRef.update({wrongquestions})
        await studentRef.update({wrongquestions})
    } catch (error) {
        console.log(error)
    }
}

export default wrongAnswer
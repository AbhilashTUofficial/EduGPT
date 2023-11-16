import admin from '../../config/firebase-config.js'
import {getFirestore} from 'firebase-admin/firestore'

const db = getFirestore();

const setData = async(req, res) => {
    try {
        const studentRef = db.collection('students').doc(req.body.uid);
        const studentGet = await studentRef.get();
        const studentData = studentGet.data();

        const classRef = db.collection('classes').doc(req.body.class);
        const classGet = await classRef.get();
        if(!classGet.data()){
            await classRef.set({
                points: {},
                wrongquestions: []
            })
        }
        if(studentData){
            await studentRef.update({
                name: req.body.name,
                type: req.body.type,
                class: req.body.class
            })
            res.json({message: "User name updated"})
        }
    } catch (error) {
        console.log(error)
    }
}

export default setData
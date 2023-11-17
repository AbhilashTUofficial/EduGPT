import {getWeakestTopic} from '../../services/openaiServices.js'

const weakestTopic = async(req, res) => {
    try {
        const className  = req.params.classid;
        const testName = req.params.testid
        const classRef = db.collection('classes').doc(className);
        const classGet = await classRef.get();
        const classData = classGet.data();
        const wrongquestions = classData.wrongquestions;
        const weakestTopic = await getWeakestTopic(wrongquestions);
        res.send({weakestTopic})
    }catch(error){
        console.log(error)
    }
}

export default weakestTopic
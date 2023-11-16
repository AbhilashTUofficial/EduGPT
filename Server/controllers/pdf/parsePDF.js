import axios from 'axios'
import generateQuestion from '../question/generateQuestion.js'
import dotenv from 'dotenv'
import ConvertAPI from 'convertapi';

const convertapi = new ConvertAPI(process.env.CONVERT_API_SECRET);

dotenv.config()

const parsePDF = async (req, res) => {
    try {
        const response = await axios.get(
            req.body.url
        );
      
        const textContent = response.data;

        const questions = await generateQuestion(textContent)
        
        res.status(200).json({questions})
    } catch (error){
        console.log(error)
    }
}

export default parsePDF
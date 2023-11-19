import youtubesearchapi from 'youtube-search-api'
import axios from 'axios'

const fetchURL = async(weakestTopic) => {
    try {
        let url
        youtubesearchapi.GetListByKeyword('Trigonometry tutorial',false,1)
            .then((result) => {
                console.log('', result.items[0].id)
                url = `https://youtube.com/watch?v=${result.items[0].id}`
                return url
            })
            .then(async() =>{
                await axios.post('http://localhost:3000/api/trigger', {url, weakestTopic})
            })
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error)
    }
}

export default fetchURL
import youtubesearchapi from 'youtube-search-api'

const fetchURL = async(weakestTopic) => {
    try {
        let url
        youtubesearchapi.GetListByKeyword(weakestTopic,false,1)
            .then(result => {
                url = result
            })
            .catch(error => console.log(error))
            return `https://youtube.com/watch?v=${url.id}`
    } catch (error) {
        console.log(error)
    }
}

export default fetchURL
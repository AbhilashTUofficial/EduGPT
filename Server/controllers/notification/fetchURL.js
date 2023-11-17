import youtubesearchapi from 'youtube-search-api'

const fetchURL = async(weakestTopic) => {
    try {
        youtubesearchapi.GetListByKeyword("Superman",false,1)
            .then(result => console.log(result))
            .catch(error => console.log(error))
        return result

    } catch (error) {
        console.log(error)
    }
}

export default fetchURL
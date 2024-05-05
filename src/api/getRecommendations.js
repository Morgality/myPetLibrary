import axios from "axios";
import { getRandomPhoto } from "./getRandomPhoto";


const getRecommendations = async (setRecList) => {
    let recData = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=6&_page=2`);
    
    // setRecList(recData.data)

    // const a = recData;

    setRecList(recData.data.map(item => {
        return {
            ...item,
            photo : getRandomPhoto()
        }
    }))
}

export default getRecommendations
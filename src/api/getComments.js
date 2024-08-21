import axios from 'axios';

const getComments = async (page) => {

    const data = await axios.get(`https://jsonplaceholder.typicode.com/comments`);

    return data

}

export { getComments }
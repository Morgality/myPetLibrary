import axios from 'axios'

export const getSingleproduct = async (id) => {
    return (await axios.get(`https://jsonplaceholder.typicode.com/albums/id=${id}`)).data
}
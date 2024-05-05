import axios from "axios";

export async function getUserInfo({queryKey}) {
    const [_key, { id }] = queryKey

    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)

    return data
}
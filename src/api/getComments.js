import axios from 'axios';

export const getCom = async (comments, page, setComemnts, setFetching, setPage) => {

    try {
        let com = (await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page=${page}`)).data
        let us = (await axios.get('https://jsonplaceholder.typicode.com/users')).data

        const fullComments = com.map(item => {
            return {
                ...item,
                user : us.find(user => user.id === item.id),
                stars : Math.round(Math.random() * (5 - 1) + 1)
            }
        })

        console.log(fullComments[0].stars)

        setComemnts([...comments, ...fullComments])
        setPage(prev => prev + 1)

    } catch (error) {
        console.log(error)
    } finally {
        setFetching(false)
    }

    return
}
import axios from 'axios'

export const getProducts = (setProducts, page) => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?_limit=12&_page=${page}`)
            .then(res => {setProducts(res.data.map(item => {
                return ({
                    ...item,
                    cost : Math.round(Math.random() * 1000)
                })
            }))})
}
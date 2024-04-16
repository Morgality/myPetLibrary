import React, { useEffect, useState } from "react";
import "./SingleProductPage.scss"
import { getSingleproduct } from "../../api/getSingleProduct";
import bag1 from "../../../public/img/ProductCardImg/bag1.jpg";
import bag2 from "../../../public/img/ProductCardImg/bag2.jpg";
import bag3 from "../../../public/img/ProductCardImg/bag3.jpg";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import axios from "axios"
import { ChatBlock } from "../Char/ChatBlock/ChatBlock";

const SingleProductPage = ({
    productTitle = 'Заголовок'
}) => {

    const [addedInBasket, setaddedInBasket] = useState(false)
    
    const [productData, setProductData] = useState(undefined)

    const params = useParams().id

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?id=${params}`).then(res => {
            setProductData(res.data[0])
            console.log(res.data)
        })
    } ,[])

    return (
            <div className="single--comment--page">
                <h3 style={{textAlign: 'center'}}>
                    { productData ? productData.name : 'Loading...' }
                </h3>

            <div className="product--demonstration">
                <div style={{
                    backgroundImage: `url("${bag1}")`,
                    backgroundSize : 'cover',
                    backgroundPosition: '30%'
                }} className="product--demonstration-frist"></div>
                <div style={{
                    backgroundImage: `url("${bag2}")`,
                    backgroundSize : 'cover',
                    backgroundPosition: '30%'
                }} className="product--demonstration-second"></div>
                <div style={{
                    backgroundImage: `url("${bag3}")`,
                    backgroundSize : 'cover',
                    backgroundPosition: '30%'
                }} className="product--demonstration-third"></div>
            </div>
            <div style={{margin: '1em', border: '1px solid lightgray', borderRadius: '4px', padding:'5px'}} className="product--description">
                <section>
                    <h4> Описание </h4>
                    <p> { productData ? productData.body : 'Loading...' } </p>
                </section>
            </div>

            <div className="button--block" style={{display: 'flex', justifyContent:'center'}}>
                <Button onClick={() => setaddedInBasket(prev => !prev)} size="large" type="primary" style={{fontSize:'18px', padding:'auto'}}> 
                    { addedInBasket ? 'Добавить' : 'Добавить в корзину' }
                </Button> 
            </div>

            <div className="product--comments" style={{padding: '1em'}}>
                <ChatBlock />
            </div>
        </div>
    )
}

export default SingleProductPage
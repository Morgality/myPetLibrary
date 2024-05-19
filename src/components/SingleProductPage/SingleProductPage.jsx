import React, { useEffect, useState, createContext } from "react";
import "./SingleProductPage.scss"
import { getSingleproduct } from "../../api/getSingleProduct";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { ChatBlock } from "../Char/ChatBlock/ChatBlock";
import { getRandomPhoto } from "../../api/getRandomPhoto";
import { PhotoSlider } from "./PhotoSlider/PhotoSlider";
import {AboutProduct} from "./AboutProduct/AboutProduct";
import { AddToBasketBlock } from "./AddToBasketBlock/AddToBasketBlock";
import ProductCommentList from "./ComnnetLIst/CommentList";

export const ProductContext = createContext('none');

const SingleProductPage = ({
        productTitle = 'Заголовок'
    }) => {

    const [addedInBasket, setaddedInBasket] = useState(false);
    
    const [productData, setProductData] = useState(undefined);

    const params = useParams().id;

    const [photos, setPhotos] = useState([]);

    const [selectedPhoto, setselectedPhoto] = useState(null);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?id=${params}`).then(res => {
            let currentId = res.data[0]
            setProductData(currentId)
            if (useSelector(state => state.basket.basket).find(item => item.id === currentId)) {
                setaddedInBasket(true)
            }
            
        })

        setPhotos([getRandomPhoto(), getRandomPhoto(), getRandomPhoto()])

        setselectedPhoto(photos[0])

        

    } ,[params])

    return (
            <div className="single--comment--page">
                <h3 style={{textAlign: 'center'}}>
                    { productData ? productData.name : 'Loading...' }
                </h3>

                <div className="product--info">
                    <PhotoSlider id={params} />

                    <AboutProduct params={params} productData={productData} />
                </div>

                    <ProductContext.Provider value={productData}>
                        <AddToBasketBlock productData={productData} addedInBasket={addedInBasket} setaddedInBasket={setaddedInBasket} />
                    </ProductContext.Provider>

            <div className="product--comments" style={{padding: '1em'}}>
                <ProductCommentList />    
            </div>
        </div>
    )
}

export default SingleProductPage
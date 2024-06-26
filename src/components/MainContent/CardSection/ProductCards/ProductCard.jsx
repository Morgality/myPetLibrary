import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import "./ProductCardSection.scss"
const { Meta } = Card;
import { Link } from 'react-router-dom';
import img from './ProductBag.svg'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, addCount } from '../../../../store/counterSlice';
import { getRandomPhoto } from '../../../../api/getRandomPhoto';

const ProductCard = ({item, page}) => {
  
  const products = useSelector(state => state.basket.basket.find(prod => prod.title === item.title))

  function setInBasket() {

    if (products) {
      dispatch(addCount(item.id))
    } else { 
      dispatch(addToBasket({
        title : item.title,
        id : item.id,
        cost : item.cost,
        count : 1
      }));
    }

    setAdded(prev => !prev)

    setTimeout(() => {
      setAdded(prev => !prev)
    } ,1500)
  }

  useEffect( () => {
    getPhoto(getRandomPhoto())
  } ,[page])

  const [photo, getPhoto] = useState(null)

  const [added, setAdded] = useState(false)

  const dispatch = useDispatch()

  return (
    <div className="card--block">
      <Link style={{textDecoration:'none', display: 'flex', justifyContent: 'center'}} to={`product/${item.id}`}>
      <Card
        id='single--card'
        hoverable
        cover={<img style={{minHeight:'400px'}} alt="example" src={photo} />}
        >
        <Meta 
          title={item.title} 
          description={`Стоимость : ${item.cost}`}
        />

      </Card></Link>

  </div>
  )
};
export default ProductCard;
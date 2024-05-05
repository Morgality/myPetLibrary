import React, { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import counterSlice, { addToBasket, addCount, removeFromBasket } from "../../../store/counterSlice";
import { ProductContext } from "../SingleProductPage";

export const AddButton = ({nowCost}) => {

    const context = useContext(ProductContext);

    const dispatch = useDispatch();

    const [inBasket, setInBasket ] = useState(false);

    const basket = useSelector(state => state.basket.basket);

    const [count, setCount ] = useState(basket.count);

    const removeBasket = () => {

        dispatch(removeFromBasket(context.id))

        setCount(prev => prev - 1)

        if (count < 2) {
            setInBasket(false);
            return 
        }
    }

    useEffect(() => {
        console.log(basket)
        console.log(context?.id)
        console.log(context)
    }, [])

    useEffect(() => {
        let currentProduct = basket.find(item => item.id === context?.id);

        setCount(currentProduct ? currentProduct?.count : 0)
        
        if (basket.length < 1) setInBasket(false)
    } , [basket])

    const addInBasket = () => {

        if (!inBasket) {
            setInBasket(prev => true)
            dispatch(addToBasket({
                title : context.name,
                id : context.id,
                cost : nowCost,
                count : 1
            }))
        } else {
            dispatch(addCount(context.id))
        }
        setCount(prev => prev + 1)
    }

    if ( !inBasket ) {
        return (
            <Button onClick={() => {
                addInBasket()
                console.log(context)
            }} size="large" type="primary" style={{fontSize:'18px', fontWeight: 'bold' , padding:'auto', height:'62px'}}> 
            { inBasket ? 'Добавить' : 'Добавить в корзину' }
            </Button> 
        )
    } else {
        return (
            <div className="added--in--basket">
                    <button onClick={removeBasket}>-</button>
                    <span> { count } </span>
                    <button onClick={addInBasket}>+</button>
            </div>
        )
    }
}
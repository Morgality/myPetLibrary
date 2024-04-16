import React from "react";
import "./ModalListPoint.scss"
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from "../../store/counterSlice";
import { ModalListPointSingle } from "./ModalListPointSingle";

export const ModalListPoint = ({...props}) => {

        const products = useSelector((state) => state.basket.basket)

        return (
            <>
                { products.length === 0 ? 
                    'Нет товаров' : 
                    <ul style={{padding: '0', margin: '0'}}>
                        { products.map(item => {
                            return <ModalListPointSingle count={item.count} id={item.id} title={item.title}/>
                        }) }
                    </ul>
                 }
            </>
            
        )
    }
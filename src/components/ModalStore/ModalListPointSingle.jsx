import React from "react";
import { addToBasket, removeFromBasket } from "../../store/counterSlice";
import { useDispatch } from 'react-redux'

export const ModalListPointSingle = ({title='Описание товара', id, count, ...props}) => {

    const dispatch = useDispatch()

    return (
        <li className="modal--list--point" style={{listStyleType: 'none'}}>
            <p>{ title } <span> - </span> {count} </p>
            <div className="list--point--control">
                <input id="list--point--control" type="button" value="&#128465;" onClick={() => dispatch(removeFromBasket(id))}/>
            </div>
        </li>
    )
}
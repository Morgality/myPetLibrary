import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./AddToBasketBlock.scss";
import { useDispatch, useSelector } from "react-redux";
import { AddButton } from "./AddButton";

export const AddToBasketBlock = ({addedInBasket, setaddedInBasket }) => {

    const [nowCost, setNowCost] = useState(null);

    const [ inBasket, addInBasket ] = useState(false);

    useEffect(() => {
        setNowCost(Math.floor(Math.random() * (5000 - 3000) + 3000))
    }, [])

    return (
        <div className="button--block">
            <div className="cost-block">
                <span id="now--price"> { nowCost }&#8381; </span>
            </div>

            <AddButton nowCost={nowCost}/>
        </div>
    )
}
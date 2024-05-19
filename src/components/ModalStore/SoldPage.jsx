import useSelection from "antd/es/table/hooks/useSelection";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export const SoldPage = () => {

    const products = useSelector((state) => state.basket.basket)

    useEffect(() => {
        console.log(products)
    } ,[])

    return (
        <div className="">

            <ul>
                { products.map(item => {
                    return <li key={item.id}> {item.title} </li>
                }) }
            </ul>

            <form action="#">
                <label htmlFor="main">Почта</label><input autoComplete="true" type="text" name="mail" id="" />
            </form>
        </div>
    )
}
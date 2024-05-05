import React, { useState } from "react";
import ProductCard from "../ProductCard";
import { PagePagination } from "../Pagination/Pagination";
import { useSelector } from "react-redux";


export const ProductList = ({products, page, setPage}) => {


    return (
        <>
            <div className="product--card--section--cards">
            { products.map(item => {
                return (
                    <ProductCard page={page} item={item} />
                )
            }) }
            
            </div>
            <PagePagination page={page} setPage={setPage} />
        </>
    )
}
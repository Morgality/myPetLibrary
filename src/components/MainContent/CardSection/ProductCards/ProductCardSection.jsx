import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { PagePagination } from "./Pagination/Pagination";
import { PendingSpinner } from "../../../wrappers/Pending/PendingSpinner";
import { getProducts } from "../../../../api/getProducts";
import ChatBasement from "../../../Char/ChatBasement";
import './ProductCardSection.scss'
import { ProductList } from "./ProductList/ProdctList";

export const ProductCardSection = () => {

    const [page, setPage] = useState(1)

    const [products, setProducts] = useState([])

    const renderProducts = () => {
        return (
            <>
            <div className="product--card--section--cards">
                { products.map(item => {
                return (
                    <ProductCard item={item} />
                )
            }) }
            
            </div>
            <PagePagination page={page} setPage={setPage} />
            </>
        )
    }

    useEffect(() => {

            getProducts(setProducts, page)

    } ,[page])

    return (
        <div className="product--card--section">
                { products.length === 0 ? 

                <PendingSpinner /> : 

                <ProductList products={products} page={page} setPage={setPage} /> }
        </div>
    )
}
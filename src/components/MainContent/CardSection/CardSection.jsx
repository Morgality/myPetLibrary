import React, { useEffect, useState } from "react";
import '../../wrappers/DivBlock/DivBlock.scss'
import MainTab from "../MainTab/MainTab";
import { ProductCardSection } from "./ProductCards/ProductCardSection";


export const CardSection = () => {

    return (
        <div className="content-block div-block">
            <MainTab />
            <ProductCardSection />
        </div>
    )
}
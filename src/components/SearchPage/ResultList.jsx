import React from "react";
import { SingleSearchResult } from "./SingleSearchResult";

export const ResultList = ({result}) => {
    return (
        <>
            { result.map(element => {
                return <SingleSearchResult title={element.title}/>
            }) }
        </>
    )
}
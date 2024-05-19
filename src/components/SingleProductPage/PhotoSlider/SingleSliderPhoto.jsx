import React from "react";

export const SingleSliderPhoto = ({photo, setselectedPhoto}) => {
    return (
        <li id="single--product--photo">
            <img src={photo} 
            onClick={() => setselectedPhoto(photo)}
            alt="" />
        </li>
    )
}
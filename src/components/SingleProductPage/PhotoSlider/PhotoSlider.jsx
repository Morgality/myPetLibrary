import React, { useEffect, useState } from "react";
import { getRandomPhoto } from "../../../api/getRandomPhoto";
import { SingleSliderPhoto } from "./SingleSliderPhoto";
import "./PhotoSlider.scss";
import { ModalPhoto } from "./ModalPhoto";


export const PhotoSlider = ({id}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [photos, setPhotos] = useState([])

    const [selectedPhoto, setselectedPhoto] = useState(null)

    useEffect( () => {
        setPhotos([getRandomPhoto(), getRandomPhoto(), getRandomPhoto()]);

        setselectedPhoto(photos[0])
    } ,[id])

    useEffect(() => {
        setselectedPhoto(photos[0])
    } ,[photos])

    return (
        <div className="product--slider">
                <div className="aside--photos">
                     <ul>

                        { photos.map(item => {
                            return (
                                <SingleSliderPhoto setselectedPhoto={setselectedPhoto} photo={item} />
                            )
                        }) }
                     </ul>
                </div>
                
                <div id="current--photo">
                    <img onClick={() => setIsModalOpen(true)} src={selectedPhoto} alt="" />
                    <ModalPhoto isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedPhoto={selectedPhoto} />
                </div>
            </div>
    )
}
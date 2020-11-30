import React from 'react'
import GalleryItem from './GalleryItem'
import { Items } from '../ItemsObj'

const Gallery = () => {

    return (
        <div className="gallery" id="gallery">
            {Items.map(item => (
                <GalleryItem key={item.id} work={item} />
            ))}
        </div>
    )
}

export default Gallery

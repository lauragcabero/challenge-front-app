import React from 'react';
import SimpleBar from 'simplebar-react';
import { GalleryItem } from '../GalleryItem/GalleryItem';

export function Gallery({ items }) {

  return (
    <div className="container">
      <SimpleBar style={{ height: '70vh', maxWidth: '100%' }}>
        <div className="row">
          {items.map((item, index) =>
            <GalleryItem key={index}
              id={item.id}
              image={item.image}
              alt={item.alt}
              name={item.title}
            ></GalleryItem>
          )}
        </div>
      </SimpleBar>
    </div>
  )
}
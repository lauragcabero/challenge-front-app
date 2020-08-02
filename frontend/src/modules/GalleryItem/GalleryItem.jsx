import React from 'react';
import './GalleryItem.scss';
import { Link } from 'react-router-dom';

export function GalleryItem(props) {

  return (
    <div className="col-sm-4 block-mobile">
      <Link to={'/' + props.id}>
        <img className="block-mobile__image" src={props.image} alt={props.alt} />
        <p className="block-mobile__p" style={{ textTransform: 'uppercase' }}>{props.name}</p>
      </Link>
    </div>
  )
}
import React from 'react';
import './DetailItem.scss';

export function DetailItem({mobile}) {

  return (
    <div className="col-sm-12 block-mobile">
      <img className="block-mobile__image" src={mobile.image} alt={mobile.alt} />
      <p className="block-mobile__p-title" style={{ textTransform: 'uppercase' }}>{mobile.name}</p>
      <p className="block-mobile__p">{mobile.description}</p>
      <p className="block-mobile__p">{mobile.colors}</p>
      <p className="block-mobile__last-p">{mobile.price}</p>
    </div>
  )
}
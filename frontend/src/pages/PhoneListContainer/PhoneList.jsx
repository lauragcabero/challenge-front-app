import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { environment } from '../../shared/environment';
import { Gallery } from '../../modules/Gallery/Gallery';
import { mobilesAPIToModel } from '../../helpers/galleryHelper';
import { MobilesContext } from '../../shared/contexts/MobilesContext';

export function PhoneList() {

  const [mobiles, setMobiles] = useContext(MobilesContext);

  useEffect(() => {
    axios.get(environment.url)
      .then(res => {
        const mobiles = mobilesAPIToModel(res.data);
        setMobiles(mobiles);
      })
  }, [])

  return (
    <Gallery items={mobiles}></Gallery>
  )
}
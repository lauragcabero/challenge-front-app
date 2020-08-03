import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { DetailItem } from '../../modules/DetailItem/DetailItem';
import { MobilesContext } from '../../shared/contexts/MobilesContext';

export function PhoneDetail() {

  const [mobiles] = useContext(MobilesContext);
  const [mobile, setMobile] = useState({});
  let id = Number(useParams().id);

  useEffect(() => {
    const localMobile = mobiles.find(el => el.id === id);
    setMobile(localMobile);
  }, [mobiles])

  return (
    <div>
      <h1>{mobile.title}</h1>
      <DetailItem mobile={mobile} />
    </div>
  )
}
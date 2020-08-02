import React, { useParams, useContext, useEffect } from 'react';
import { DetailItem } from '../../modules/DetailItem/DetailItem';
import { MobilesContext } from '../../shared/contexts/MobilesContext';

export function PhoneDetail() {

  const [mobile, setMobiles] = useContext(MobilesContext);
  const id = useParams().id;

  return (
    <div>
      <h1 className="b-text-primary d-flex justify-content-center">{mobile.title}</h1>
      <DetailItem mobile={mobile} />
    </div>
  )
}
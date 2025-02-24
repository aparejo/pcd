import React from 'react';
import { useParams } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import RubberBearings from '../components/products/RubberBearings';
import SleeveBearings from '../components/products/SleeveBearings';
import SternTubeSealA from '../components/products/SternTubeSealA';
import SternTubeSealB from '../components/products/SternTubeSealB';
import BrassStuffingBox from '../components/products/BrassStuffingBox';
import ClutchPumps from '../components/products/ClutchPumps';
import MultiPurposePumps from '../components/products/MultiPurposePumps';
import EngineCoolingPumps from '../components/products/EngineCoolingPumps';
import ImpellerGuide from '../components/products/ImpellerGuide';
import ImpellerTypes from '../components/products/ImpellerTypes';
import SeaWaterStrainers from '../components/products/SeaWaterStrainers';
import MarineEngines from '../components/products/MarineEngines';
import EmergencyLights from '../components/products/EmergencyLights';
import AntennaMounts from '../components/products/AntennaMounts';
import MarineSirens from '../components/products/MarineSirens';
import MarineCompasses from '../components/products/MarineCompasses';

export default function Products() {
  const { category } = useParams();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (category === 'rubber-bearings') {
    return <RubberBearings />;
  }
  
  if (category === 'sleeve-bearings') {
    return <SleeveBearings />;
  }
  
  if (category === 'stern-tube-seal-a') {
    return <SternTubeSealA />;
  }
  
  if (category === 'stern-tube-seal-b') {
    return <SternTubeSealB />;
  }
  
  if (category === 'brass-stuffing-box') {
    return <BrassStuffingBox />;
  }
  
  if (category === 'clutch-pumps') {
    return <ClutchPumps />;
  }
  
  if (category === 'multi-purpose-pumps') {
    return <MultiPurposePumps />;
  }
  
  if (category === 'engine-cooling-pumps') {
    return <EngineCoolingPumps />;
  }
  
  if (category === 'impeller-guide') {
    return <ImpellerGuide />;
  }
  
  if (category === 'impeller-types') {
    return <ImpellerTypes />;
  }
  
  if (category === 'sea-water-strainers') {
    return <SeaWaterStrainers />;
  }
  
  if (category === 'marine-engines') {
    return <MarineEngines />;
  }
  
  if (category === 'emergency-lights') {
    return <EmergencyLights />;
  }
  
  if (category === 'antenna-mounts') {
    return <AntennaMounts />;
  }
  
  if (category === 'sirens') {
    return <MarineSirens />;
  }
  
  if (category === 'compasses') {
    return <MarineCompasses />;
  }

  return <FeaturedProducts />;
}
import React from 'react';
import InfoSection from '../InfoSection/InfoSection';
import Pricing from '../Pricing/Pricing';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjThree} />
           
            <InfoSection {...homeObjTwo} />
            <Pricing/>
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home;
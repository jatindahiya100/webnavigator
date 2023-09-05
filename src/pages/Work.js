import React from 'react'
import SideBird from '../assets/images/project/Sidebird-Twitter-fanbase-builder.png'
import ClearBit from '../assets/images/project/Clearbit.png'
import Compressor from '../assets/images/project/Compressor-io.png'
import Proper from '../assets/images/project/Proper.png'
import LuxyHair from '../assets/images/project/Luxy-Hair.png'
import JPLewis from '../assets/images/project/JP-Lewis-Group.png'
import customDashboardUI from '../assets/images/project/customDashboardUI.png'
import { useEffect } from 'react'
import Banner from '../components/Banner'

const Work = () => {
  useEffect(() => {
    document.title = "The Web Navigators | Previous Work";
  }, [])

  return (
    <>
      <Banner />
    </>
  );
};

export default Work;

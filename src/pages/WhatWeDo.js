import React from 'react'
import { useEffect } from 'react';
import Banner from '../components/Banner';

export default function WhatWeDo() {
  useEffect(() => {
    document.title = "The Web Navigators | What We Do";
  }, [])

  return (
    <>
      <Banner />
    </>
  );
}

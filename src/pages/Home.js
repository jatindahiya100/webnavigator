import React from 'react'
import TextImageGrid from '../components/TextImageGrid'
import animationData from '../assets/images/Animation1689573956186.json'

export default function Home() {
  return (
    <>
      <TextImageGrid
        heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        btnText="Explore More"
        btnLink=""
        imageType="Lottie"
        imageUrl={animationData}
      />
    </>
  )
}

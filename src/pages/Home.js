import React from 'react'
import TextImageGrid from '../components/TextImageGrid'
import animationData from '../assets/images/Animation1689573956186.json'

export default function Home() {
  return (
    <>
      <TextImageGrid
        heading="I’m Jatin Dahiya. I live in Sonipat City, where I design the future."
        text="I’ve loved making things for as long as I can remember, and wrote my first program when I was 12 years old, just two weeks after my father brought home the brand new DELL Latitude | E5410 that I taught myself to type on."
        btnText="Explore More"
        btnLink=""
        imageType="Lottie"
        imageUrl={animationData}
      />
    </>
  )
}

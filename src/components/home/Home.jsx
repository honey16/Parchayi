import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import Services from './Services'
import GalleryPreview from './GalleryPreview'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <Banner/>
      <Services/>
      <GalleryPreview/>
      <Testimonials/>
    </>
  )
}

export default Home
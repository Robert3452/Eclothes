import React from "react"
// import News from '../components/News'
// import Slider from '../components/Slider'
import { Slider, News, Header, Footer } from '../components';


export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <News />
      <Footer />
    </>
  )
}

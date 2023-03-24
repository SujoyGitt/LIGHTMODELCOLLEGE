import React from 'react'
import { LatestNews } from "./Component/LatestNews/LatestNews";
import { Service } from "./Component/Service/Service";
import { Team } from "./Component/Team/Team";
import { Testimonial } from "./Component/Testimonial/Testimonial";
import { Gallery } from "./Component/Gallery/Gallery";

export const Home = () => {
  return (
    <>
    <Service/>
    <Gallery/>
    <Team/>
    <Testimonial/>
    <LatestNews/>
    </>
  )
}

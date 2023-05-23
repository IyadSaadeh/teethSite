import AboutArea from '@/components/Home/AboutArea'
import AppointmentArea from '@/components/Home/AppointmentArea'
import BlogArea from '@/components/Home/Blog/BlogArea'
import Hero from '@/components/Home/Hero'
import ServicesArea from '@/components/Home/Services/ServicesArea'
import TestimonialArea from '@/components/Home/Testimonial/TestimonialArea'
import WorkArea from '@/components/Home/WorkArea'
import React from 'react'

const MainPage = () => {
  return (
    <>
   <Hero/>
        <AboutArea/>
        <WorkArea/>
        <AppointmentArea/>
        <ServicesArea/>
        <TestimonialArea/>
        <BlogArea/>
    </>
  )
}

export default MainPage
import React from 'react'
import Layout from '../../layout/Layout/Layout'
import AboutHero from '../../components/AboutHero/AboutHero'
import WhyUs from '../../components/WhyUs/WhyUs'
import HowWeWork from '../../components/HowWeWork/HowWeWork'
import Faqs from '../../components/Faqs/Faqs'
import OurTrustedParteners from '../../components/OurTrustedParteners/OurTrustedParteners'

const About = () => {
  return (
    <Layout>
        <AboutHero/>
        <WhyUs/>
        <HowWeWork/>
        <Faqs/>
        <OurTrustedParteners/>
    </Layout>
  )
}

export default About
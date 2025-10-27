import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Companies from './components/Companies'
import Help from './components/Help'
import OurWork from './components/OurWork'
import MeetTeam from './components/MeetTeam'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Help />
      <OurWork />
      <MeetTeam />
      <ContactUs />
      <Footer />
    </>
  )
}

import React, { useEffect } from 'react'
import Container from '../layer/Container'

const SisterConcern = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
    <Container>
      <div className="text-center max-w-4xl md:py-28 py-10 mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
        ABOUT NAOGAON IMPEX
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
        NAOGAON IMPEX  Is sister concern of our ADVANCED ENGINEERS , Naogaon Impex is an importer of machinery and spare parts for rice And food Industry . The company specializes in providing high-quality equipment, including rice and food industry‘s machinery‘s  ,Boiler, Parboiling, Drier  Milling, Silo, and  spare parts essential for efficient rice and food processing. Naogaon Impex aims to support rice and food mill operators by offering reliable and durable products that ensure smooth operations and minimize downtime, contributing to the growth and development of the rice and food  industry. </p>
      </div>
      
    </Container>
  </section>
  )
}

export default SisterConcern
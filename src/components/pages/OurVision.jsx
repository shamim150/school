import React, { useEffect } from 'react'
import Container from '../layer/Container'

const OurVision = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (


    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <Container>
        <div className="text-center max-w-4xl md:py-28 py-10 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
            Our Vission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Continues Technological improvement for energy saving and environment friendly project. </p>
        </div>
        
      </Container>
    </section>
  )
}

export default OurVision
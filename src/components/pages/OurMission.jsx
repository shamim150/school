import React from 'react';
import Container from '../layer/Container';

const OurMission = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <Container>
        <div className="text-center max-w-4xl md:py-28 py-10 mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          Client satisfaction is our main mission 
          </p>
        </div>
        
      </Container>
    </section>
  );
};

export default OurMission;

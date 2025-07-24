import React, { useEffect } from 'react';
import Container from '../layer/Container';

const ManagingDirector = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-100 py-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto py-10">
          <h2 className="text-xl md:text-4xl font-bold text-gray-800 mb-6">
            Managing Director&apos;s Message
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Welcome to ADVANCED ENGINEERS. As the Managing Director of this esteemed organization, I am proud to share our commitment to excellence, innovation, and sustainable growth in the Rice and Food engineering industry. Since our inception, Advanced Engineers has been driven by a passion for delivering world-class Rice and Food engineering solutions that meet the needs of our clients and contribute to the success of their projects.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            At Advanced Engineers, we understand that each project is unique, and that is why we tailor our approach to align with the specific needs and goals of our clients. Our team of skilled professionals is dedicated to providing high-quality engineering services, from initial design and planning to execution and ongoing support. We believe that every challenge is an opportunity for us to innovate, collaborate, and deliver results that exceed expectations.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            We are committed to maintaining the highest standards of safety, quality, and efficiency, ensuring that we not only meet but also anticipate the evolving demands of the Rice and Food engineering sector. Our focus on integrity, transparency, and customer satisfaction forms the foundation of our long-term relationships with clients, partners, and stakeholders.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            As we look to the future, Advanced Engineers will continue to invest in Rice and Food cutting-edge technology, advanced training, and sustainable practices to remain at the forefront of the Rice and Food engineering industry. We are excited about the opportunities ahead and remain fully dedicated to our mission of driving innovation and providing the best engineering solutions possible.
          </p>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
            Thank you for your trust and support as we continue on this journey of growth and success.
          </p>
          <div className="mt-8 text-center">
            <p className="text-xl font-bold text-gray-800">Sincerely,</p>
            <p className="text-xl font-bold text-gray-800 mt-2">S.M Enamul Haque</p>
            <p className="text-xl text-gray-600 mt-1">Managing Director</p>
            <p className="text-xl text-gray-600 mt-1">ADVANCED ENGINEERS, BANGLADESH</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ManagingDirector;

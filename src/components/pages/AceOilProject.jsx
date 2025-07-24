import React, { useEffect } from "react";
import Container from "../layer/Container";

const AceOilProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#ECFAFE] md:p-6 p-2 md:mt-10 mt-2 ">
      <Container>
        <div className=" text-center cursor-pointer ">
          <h2 className="md:text-4xl text-lg font-bold font-DM text-secondary ">
            Ace Oil Project & Refinery System
          </h2>
          <div className="md:flex md:gap-10 md:w-full md:py-10 py-4">
            <div className="flex justify-center w-1/2">
              <img
                className="max-w-[700px] h-auto object-cover w-full rounded-xl"
                src="/Connect With Slider/Ace_oil.jpg"
                alt="Induss"
              />
            </div>
            <div className="flex justify-center items-center mb-4 md:text-2xl text-sm text-justify text-gray-700 w-1/2">
      <p>     <b>ACE Oil Project Engineering Pvt. Ltd.</b> is a leading company specializing in the design,
              manufacturing, and installation of advanced oil mill machinery and
              refining systems. The company provides end-to-end solutions for
              oil extraction and refining processes, catering to a wide range of
              industries, including edible oils and biofuels. Their product
              range includes high-quality oil expellers, seed cleaners, cooking
              kettles, and state-of-the-art refining equipment for achieving
              pure and high-grade oil products. ACE Oil Project Engineering Pvt.
              Ltd. emphasizes innovation, efficiency, and sustainability in its
              machinery, offering customized systems to meet diverse client
              needs. Known for its robust engineering expertise and
              customer-focused approach, the company supports clients with
              turnkey solutions, from project planning to operational support.</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AceOilProject;

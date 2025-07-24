import React from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";
import { Link } from "react-router-dom";
import { solutionsData } from "../../data/solutionsData";

const SolutionForIndustries = () => {
  return (
    <div className="bg-[#ECFAFE]  md:pb-10 pb-4">
      <Container>
        <TitleHeader
          className="text-center md:py-10 py-3 "
          headerText="শিক্ষকবৃন্দ"
        />
        <div>
          <div className=" grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-6">
            {solutionsData.slice(0, 8).map((solution, index) => (
              <Link target="_blank" to={`/allsolution/${solution.id}`} key={index}>
                <div
                  key={index}
                  className=" max-h-78 h-full  bg-white p-6 shadow-md hover:scale-105 transition duration-300"
                >
                  <img className="h-52 object-contain md:object-cover w-full" src={solution.imgSrc} alt={solution.altText} />
                  <p className="text-black/80 font-bold md:text-base text-xs mt-2">
                    {solution.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <Link
            to="/allsolution"
            target="_blank"
            className="flex items-center justify-center md:mt-6 mt-3"
          >
            <button className="bg-[#2CB0E1] hover:bg-[#3750A3] transition-all duration-1000 text-black hover:text-white px-5 py-2 mt-5 rounded-lg">
              View All
            </button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default SolutionForIndustries;

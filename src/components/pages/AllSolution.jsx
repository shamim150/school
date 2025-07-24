import React, { useEffect } from "react";
import Container from "../layer/Container";
import TitleHeader from "../layer/TitleHeader";
import { solutionsData } from "../../data/solutionsData";
import { Link } from "react-router-dom";



const AllSolution = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#ECFAFE] mt-16 md:mt-0 md:pb-10 pb-4">
      <Container>
        <TitleHeader className="text-center md:py-10 py-3 " headerText="Solutions For your Industries" />
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-6">
          {solutionsData.map((solution, index) => (
            <Link to={`/allsolution/${solution.id}`} key={index}>
            <div key={index} className=" max-h-78 h-full  bg-white p-6 shadow-md hover:scale-105 transition duration-300">
              <img src={solution.imgSrc} alt={solution.altText} />
              <p className="text-black/80 font-bold md:text-base text-xs mt-2">{solution.title}</p>
            </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllSolution;

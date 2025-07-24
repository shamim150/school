import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { solutionsDetailsData } from "../data/solutionsData";
import Container from "./layer/Container";

export const SolutionDetails = () => {
  const params = useParams();
  console.log(params);

  const solutionsData = solutionsDetailsData.find(
    (item) => item.id === +params.id
  );

  console.log(solutionsData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#ECFAFE] md:py-10 py-5">
      <Container className="md:mt-10 mt-14">
        <p className="text-center my-4 text-xl md:text-4xl font-bold">
          {solutionsData.title}
        </p>
        <div className="    ">
          <div className="  ">
            <img
              className="rounded-lg size-96 mx-auto md:size-[500px]"
              src={solutionsData.imgSrc}
              alt=""
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: solutionsData.description }}
            className=" mt-4 md:mt-0 text-justify"
          ></div>
        </div>
      </Container>
    </div>
  );
};

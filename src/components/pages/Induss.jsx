import React, { useEffect } from "react";
import Container from "../layer/Container";

const Induss = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
   <div className="bg-[#ECFAFE] md:p-6 p-2 md:mt-10 mt-2 ">
     <Container>
      <div className=" text-center cursor-pointer ">
        <h2 className="md:text-4xl text-lg font-bold font-DM text-secondary ">
          Induss (Pioneerin Perboling & Drier Technology)
        </h2>
        <div className="md:flex md:gap-10 md:w-full md:py-10 py-4">
          <div className="flex justify-center w-1/2">
            <img
              className="max-w-[700px] h-auto object-cover w-full rounded-xl"
              src="/Homepage/Induss.jpg"
              alt="Induss"
            />
          </div>
          <p className="flex justify-center items-center mb-4 md:text-base text-sm text-justify text-gray-700 w-1/2">
          Induss has been a pioneer in Parboiling & Drying technology and has more than 4500 Automatic and Semi-automatic plants in operation. Standard manual process, Semi-automatic process and 100% parboiling automatic plants. <br /> <br />

Capacity – 50TPD to 1000TPD <br /> <br />

The Induss Plants have economic, nutritional, and practical advantages. <br />
● Lower broken than raw rice <br />
● Low free fatty acids in rice bran <br />
● Higher oil content in rice bran <br />
Parboiling plants with manual, Semi-automatic, and 100% parboiling automatic plants. <br />

Parboiling Processes: <br />
I. Single Stage Single Steaming   <br />
Ii. Single Stage Double Steaming  <br />
Iii. Three-Stage Double Steaming  <br />
Iv. Steam Rice   <br />
V. Puffed Rice (Muri)  <br />

Latest Process Technology   <br />
– Continuous Pre-Steamers  <br />
– Continuous Cookers  <br />
– Automatic steam Plants  <br />
– Husk Fired Furnace for both Raw and parboiled paddy.  <br />
– Only company to offer single furnace for 5 dryers.  

          </p>
        </div>
      </div>
    </Container>
   </div>
  );
};

export default Induss;


import React, { useEffect } from 'react'
import Container from '../layer/Container'

const MaxthermBoiler = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className="bg-[#ECFAFE] md:p-6 p-2 md:mt-10 mt-2 ">
    <Container>
     <div className=" text-center cursor-pointer ">
       <h2 className="md:text-4xl text-lg font-bold font-DM text-secondary ">
       Maxtherm (Boiler)
       </h2>
       <div className="md:flex md:gap-10 md:w-full md:py-10 py-4">
         <div className="flex justify-center w-1/2">
           <img
             className="max-w-[700px] h-auto object-cover w-full rounded-xl"
             src="/Homepage/Maxtherm.png"
             alt="Maxtherm Boiler"
           />
         </div>
         <p className="flex justify-center items-center mb-4 md:text-2xl text-sm text-justify text-gray-700 w-1/2">
         Maxthem Steam Boiler (India) is a leading manufacturer of Husk Fired Steam Boilers, known for their efficiency and reliability. Advanced Engineers is the authorized sales partner for Maxthem in Bangladesh, facilitating the installation and support of these high-performance boilers. With more than 20 external and internal Husk Fired Steam Boilers successfully commissioned in Bangladesh, Advanced Engineers has established itself as a trusted provider of quality steam boiler solutions. The collaboration ensures customers in Bangladesh receive top-tier products and expert technical support for their steam generation needs.
         </p>
       </div>
     </div>
   </Container>
  </div>
  )
}

export default MaxthermBoiler






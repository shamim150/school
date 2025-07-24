import React, { useEffect } from 'react'
import Container from '../layer/Container'

const QiliRiceMill = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  return (
    <div className="bg-[#ECFAFE] md:p-6 p-2 md:mt-10 mt-2 ">
    <Container>
     <div className=" text-center cursor-pointer ">
       <h2 className="md:text-4xl text-lg font-bold font-DM text-secondary ">
       Qili (Rice Mill Machinery)
       </h2>
       <div className="md:flex md:gap-10 md:w-full md:py-10 py-4">
         <div className="flex justify-center w-1/2">
           <img
             className="max-w-[700px] h-auto object-cover w-full rounded-xl"
             src="/Homepage/Qili.jpg"
             alt="Qili Rice Mill Machinery"
           />
         </div>
         <p className="flex justify-center items-center mb-4 md:text-2xl text-sm text-justify text-gray-700 w-1/2">
         Qili Rice Mill (China) Milling Machinery is a leading provider of advanced rice milling equipment, offering cutting-edge technology designed for high efficiency and superior rice processing. Advanced Engineers is the authorized sales partner for Qili in Bangladesh, ensuring the availability of top-quality milling machinery and comprehensive support for local customers. With a strong focus on performance and reliability, Advanced Engineers helps enhance rice mill operations in Bangladesh, providing innovative solutions and expert technical assistance to meet the growing demand for efficient rice processing.e!
         </p>
       </div>
     </div>
   </Container>
  </div>
  )
}

export default QiliRiceMill






 
{/* <div className=" text-center cursor-pointer mt-5">
<h2 className="md:text-2xl text-lg font-bold font-DM text-secondary ">
Qili (Rice Mill Machinery)
</h2>
<div className="flex items-center justify-center my-5">
<img className="max-w-[700px] h-auto object-cover w-full rounded-xl" src="/Homepage/Qili.jpg" alt="" />
</div>
<p className="text-primary">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
  minus, debitis iusto nisi ratione laboriosam repellat dolor totam unde
  at, assumenda aliquid impedit ducimus accusamus voluptatum cupiditate?
  Consequuntur aliquam voluptate unde nesciunt dolorem eos quas
  voluptatem minima praesentium expedita libero enim deserunt sit
  suscipit nam, rem voluptas dolorum corrupti ratione!
</p>
</div> */}
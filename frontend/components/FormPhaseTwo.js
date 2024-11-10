import Image from "next/image";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import React, { useEffect } from "react";

const FormPhaseTwo = ({ value, setValue, handleSubmit, setPhase }) => {

  return (
    <div className="w-full max-w-7xl space-y-5">
      <h1 className="text-center text-base font-serif font-semibold text-[#B6B6B6]">
        Question 1
      </h1>
      <form>
        <h2 className="text-center text-white text-3xl font-bold">
          What is your preferred choice?
        </h2>
        <div className="flex flex-row items-center justify-center space-x-5 mt-20">
          <div className="relative w-1/3 bg-[#6D6D6D] rounded-xl p-10">
            <h2 className="text-center">Nike Orange</h2>
            <Image
              width={1000}
              height={1000}
              src={"/assets/img/nike-orange.png"}
              alt="Nike Orange"
              className="w-52 h-52 object-contain object-center mx-auto"
            />
            <input
              type="radio"
              name="shoe-orange"
              value="Nike Orange"
              checked={value === "Nike Orange"}
              onChange={({ target }) => setValue("step1", target.value)}
              className="absolute -top-[6px] left-[50%] rounded-full custom-radio"
            />
          </div>
          <div className="relative w-1/3 bg-[#6D6D6D] rounded-xl p-10">
            <h2 className="text-center">Nike Orange</h2>
            <Image
              width={1000}
              height={1000}
              src={"/assets/img/nike-black.png"}
              alt="Nike Black"
              className="w-52 h-52 object-contain object-center mx-auto"
            />
            <input
              type="radio"
              name="shoe-black"
              value="Nike Black"
              checked={value === "Nike Black"}
              onChange={({ target }) => setValue("step1", target.value)}
              className="absolute -top-[6px] left-[50%] rounded-full custom-radio"
            />
          </div>
        </div>
        <h2 className="text-center text-[#FA1C1C] text-base font-bold my-5">
          Please Select One
        </h2>
        <div className="flex flex-row items-center justify-around my-5">
          <button type="button" onClick={() => setPhase(3)} className="text-black font-bold bg-[#EDB6D2] p-7 rounded-full">
            <FiArrowUpLeft className="inline-flex mr-5" /> Back
          </button>
          <button type="button" onClick={handleSubmit} className="text-black font-bold bg-[#BBE94A] p-7 rounded-full">
            Next <FiArrowUpRight className="inline-flex ml-5" /> 
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPhaseTwo;

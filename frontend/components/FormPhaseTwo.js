import Image from "next/image";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import React, { useEffect } from "react";

const FormPhaseTwo = ({ value, setValue, handleSubmit, setPhase }) => {
  return (
    <>
      <div className="w-full lg:relative absolute top-0 left-0 z-0 lg:w-1/2 lg:hidden">
        <div className="relative ">
          <Image
            width={1000}
            height={1000}
            src={"/assets/img/arrow-union.png"}
            alt="arrow-union"
            className="lg:w-80 w-52 h-auto absolute lg:-top-28 lg:left-20 top-0 left-7 opacity-50"
          />
          <Image
            width={2000}
            height={2000}
            src="/assets/img/shoe-image-1.png" // Replace with your image path
            alt="Shoe"
            className="lg:w-[500px] w-64 lg:ml-0 lg:mr-0 ml-auto mr-5 h-auto object-cover rounded-md"
          />
          <div
            className="absolute md:block hidden -bottom-20 left-1/2 transform -translate-x-1/2 w-full h-6 blur-md rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 0, 0, 100), transparent)",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full max-w-7xl relative z-10 lg:space-y-5 space-y-3">
        <h1 className="text-center text-base font-serif font-semibold text-[#B6B6B6]">
          Question 1
        </h1>
        <form>
          <h2 className="text-center text-white text-3xl font-bold">
            What is your preferred choice?
          </h2>
          <div className="flex flex-row items-center justify-center lg:space-x-5 lg:mt-20 mt-5">
            <div
              className="relative lg:w-1/3 w-[45%] bg-[#6D6D6D] rounded-xl lg:p-10 p-6 lg:mx-0 mx-3 cursor-pointer"
              onClick={() => setValue("step1", "Nike Orange")}
            >
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
                readOnly
                //   onChange={({ target }) => setValue("step1", target.value)}
                className="absolute -top-[6px] left-[50%] rounded-full custom-radio"
              />
            </div>
            <div
              className="relative lg:w-1/3 w-[45%] bg-[#6D6D6D] rounded-xl lg:p-10 p-6 lg:mx-0 mx-3 cursor-pointer"
              onClick={() => setValue("step1", "Nike Black")}
            >
              <h2 className="text-center">Nike Black</h2>
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
                readOnly
                //   onChange={({ target }) => setValue("step1", target.value)}
                className="absolute -top-[6px] left-[50%] rounded-full custom-radio"
              />
            </div>
          </div>
          <h2 className="text-center text-[#FA1C1C] text-base font-bold my-5">
            Please Select One
          </h2>
          <div className="flex flex-row items-center justify-around my-5">
            <button
              type="button"
              onClick={() => setPhase(3)}
              className="text-black font-bold bg-[#EDB6D2] p-7 rounded-full"
            >
              <FiArrowUpLeft className="inline-flex mr-5" /> Back
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-black font-bold bg-[#BBE94A] p-7 rounded-full"
            >
              Next <FiArrowUpRight className="inline-flex ml-5" />
            </button>
          </div>
        </form>
      </div>{" "}
    </>
  );
};

export default FormPhaseTwo;

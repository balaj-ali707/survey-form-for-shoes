import Image from "next/image";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FormPhaseOne = ({ value, setValue, handleSubmit }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl max-h-dvh h-full mx-auto p-6 bg-transparent rounded-lg shadow-md space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Section 1: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          <Image
            width={1000}
            height={1000}
            src={"/assets/img/arrow-union.png"}
            alt="arrow-union"
            className="w-80 h-auto absolute -top-24 left-20 opacity-50"
          />
          <Image
            width={2000}
            height={2000}
            src="/assets/img/shoe-image-1.png" // Replace with your image path
            alt="Shoe"
            className="w-full h-auto object-cover rounded-md"
          />
          <div
            className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full h-6 blur-md rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 0, 0, 100), transparent)",
            }}
          ></div>
        </div>
      </div>

      {/* Section 2: Form */}
      <div className="w-full lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="space-y-10 font-signika flex flex-col items-end"
        >
          <h2 className="text-8xl font-bold text-white text-right">
            Questionnaire
          </h2>
          <div className="bg-[#EDB6D2] p-10 rounded-[35px] text-black ">
            <h3 className="font-semibold text-xl font-sans mb-7">Welcome!</h3>
            <p className="text-base font-sans">
              We're excited to hear your thoughts, ideas, and insights. Don't
              worry about right or wrong answers — just speak from the heart.
              Your genuine feedback is invaluable to us!
            </p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-start leading-9">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={value}
              onChange={({ target }) => setValue(target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center font-sans justify-between bg-[#BBE94A] text-white py-5 px-10 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            <h3 className="text-black font-bold">Start Survey</h3>
            <FiArrowUpRight className="text-xl text-black" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPhaseOne;

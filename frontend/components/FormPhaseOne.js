import Image from "next/image";
import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FormPhaseOne = ({ value, setValue, handleSubmit }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl max-h-dvh h-full mx-auto p-6 bg-transparent rounded-lg shadow-md space-y-6 lg:space-y-0 lg:space-x-6">
      {/* Section 1: Image */}
      <div className="w-full lg:relative absolute top-0 left-0 z-0 lg:w-1/2 lg:flex lg:justify-center">
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

      {/* Section 2: Form */}
      <div className="w-full relative z-1 lg:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="space-y-10 font-signika flex flex-col lg:items-end items-center"
        >
          <h2 className="lg:text-8xl text-4xl font-bold text-white lg:text-right text-center">
            Questionnaire
          </h2>
          <div className="bg-[#EDB6D2] p-10 rounded-[35px] text-black ">
            <h3 className="font-semibold text-xl font-sans mb-7">Welcome!</h3>
            <p className="text-base font-sans">
              We&apos;re excited to hear your thoughts, ideas, and insights. Don&apos;t
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

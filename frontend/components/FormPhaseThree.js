import Image from "next/image";
import React, { useState } from "react";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";

const FormPhaseThree = ({ value, setValue, setPhase, handleSubmit }) => {
  const [comfort, setComfort] = useState(null);
  const [looks, setLooks] = useState(null);
  const [price, setPrice] = useState(null);
  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validation to ensure all categories have a selected level
    if (comfort && looks && price) {
      setError("");
      handleSubmit({ comfort, looks, price });
    } else {
      setError("Please select a level for each category.");
    }
  };

  const renderCheckboxes = (category) => (
    <div className="flex lg:space-x-20 space-x-10">
      {[1, 2, 3, 4, 5].map((level) => (
        <label key={level}>
          <input
            type="radio"
            name={category}
            value={level}
            checked={value?.step2[category] === level.toString()}
            onChange={() => setValue("step2", null, category, level.toString())}
            className="mr-1 custom-radio-black"
          />
        </label>
      ))}
    </div>
  );

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
      <div className="w-full max-w-7xl relative z-10 lg:space-y-5 space-y-2">
        <h1 className="text-center text-base font-serif font-semibold text-[#B6B6B6]">
          Question 2
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center lg:space-y-14 space-y-5"
        >
          <h2 className="text-center text-white text-3xl font-bold">
            How important are these aspects for you?
          </h2>
          {/* Comfort */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-row bg-white font-mono lg:px-20 px-3 lg:py-5 py-3 lg:mx-0 rounded-full text-black items-center justify-between">
              <label className="block font-bold lg:text-3xl text-lg mb-2">
                Comfort
              </label>
              {renderCheckboxes("comfort", comfort, setComfort)}
            </div>
            <h3 className="text-red-500 text-lg m-3">Please select a score</h3>
          </div>

          {/* Looks */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-row bg-white font-mono lg:px-20 px-3 lg:py-5 py-3 lg:mx-0 rounded-full text-black items-center justify-between">
              <label className="block font-bold lg:text-3xl text-lg mb-2">
                Looks
              </label>
              {renderCheckboxes("looks", looks, setLooks)}
            </div>
            <h3 className="text-red-500 text-lg m-3">Please select a score</h3>
          </div>

          {/* Price */}
          <div className="lg:w-2/3 w-full">
            <div className="flex flex-row bg-white font-mono lg:px-20 px-3 lg:py-5 py-3 lg:mx-0 rounded-full text-black items-center justify-between">
              <label className="block font-bold lg:text-3xl text-lg mb-2">
                Price
              </label>
              {renderCheckboxes("price", price, setPrice)}
            </div>
            <h3 className="text-red-500 text-lg m-3">Please select a score</h3>
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <div className="w-full flex flex-row items-center justify-around my-5">
            <button
              type="button"
              onClick={() => setPhase(2)}
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
      </div>
    </>
  );
};

export default FormPhaseThree;

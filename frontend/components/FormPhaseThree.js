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
    <div className="flex space-x-20">
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
    <div className="w-full max-w-7xl space-y-5">
      <h1 className="text-center text-base font-serif font-semibold text-[#B6B6B6]">
        Question 2
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-14"
      >
        <h2 className="text-center text-white text-3xl font-bold">
          How important are these aspects for you?
        </h2>
        {/* Comfort */}
        <div className="w-2/3 flex flex-row bg-white font-mono px-20 py-5 rounded-full text-black items-center justify-between">
          <label className="block font-bold text-3xl mb-2">Comfort</label>
          {renderCheckboxes("comfort", comfort, setComfort)}
        </div>

        {/* Looks */}
        <div className="w-2/3 flex flex-row bg-white font-mono px-20 py-5 rounded-full text-black items-center justify-between">
          <label className="block font-bold text-3xl mb-2">Looks</label>
          {renderCheckboxes("looks", looks, setLooks)}
        </div>

        {/* Price */}
        <div className="w-2/3 flex flex-row bg-white font-mono px-20 py-5 rounded-full text-black items-center justify-between">
          <label className="block font-bold text-3xl mb-2">Price</label>
          {renderCheckboxes("price", price, setPrice)}
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
  );
};

export default FormPhaseThree;

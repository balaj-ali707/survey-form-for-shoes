import Image from "next/image";
import { FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import React, { useEffect } from "react";

const Thankyou = ({ setPhase }) => {
  const deleteSupabaseData = async () => {
    try {
      const email = localStorage.getItem("email");

      const res = await fetch(`/api/supabase/?email=${email}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      const response = await res.json();

      if (res.ok) {
        console.log(response.message);
      } else {
        throw new Error(response.error);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    deleteSupabaseData();
  }, []);

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
      <div className="lg:w-1/2 w-full lg:space-y-5 space-y-2">
        <h2 className="lg:text-8xl text-6xl font-bold text-white text-right">Thank you</h2>
        <h3 className="lg:text-3xl text-xl font-medium text-white text-right">
          for your feedback!
        </h3>
        <div className="flex flex-row items-center justify-end space-x-5">
          <button
            type="button"
            onClick={() => setPhase(3)}
            className="text-black font-bold bg-[#EDB6D2] p-7 rounded-3xl"
          >
            <FiArrowUpLeft className="inline-flex mr-5" /> Back
          </button>
          <button
            type="button"
            onClick={() => setPhase(1)}
            className="text-black font-bold bg-white p-7 rounded-3xl"
          >
            Back To Home <FiArrowUpRight className="inline-flex ml-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Thankyou;

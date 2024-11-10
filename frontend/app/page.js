"use client";
import FormPhaseOne from "@/components/FormPhaseOne";
import FormPhaseTwo from "@/components/FormPhaseTwo";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formPhase, setFormPhase] = useState(2);
  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState({
    step1: "",
    step2: {
      comfort: "-1",
      looks: "-1",
      price: "-1",
    },
  });

  const onProgressChange = (field, value, subField, subFieldValue) => {
    if (field === "step1") {
      setProgress((prevDetails) => {
        const newDetails = { ...prevDetails };
        newDetails[field] = value;
        return newDetails;
      });
    } else if (field === "step2") {
      setProgress((prevDetails) => {
        const newDetails = { ...prevDetails };
        newDetails.step2[subField] = subFieldValue;
        return newDetails;
      });
    }
  };

  const handleSubmit = async () => {
    try {
      setFormPhase(formPhase + 1)
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div className="h-screen flex flex-row items-center justify-center bg-gradient-to-r from-[#4D4D4D] to-[#010101]">
      {formPhase === 1 && (
        <FormPhaseOne
          value={email}
          setValue={setEmail}
          handleSubmit={handleSubmit}
        />
      )}
      {formPhase === 2 && (
        <FormPhaseTwo
          value={progress.step1}
          setValue={onProgressChange}
          handleSubmit={handleSubmit}
          setPhase={setFormPhase}
        />
      )}
    </div>
  );
}

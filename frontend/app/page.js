"use client";
import FormPhaseOne from "@/components/FormPhaseOne";
import FormPhaseThree from "@/components/FormPhaseThree";
import FormPhaseTwo from "@/components/FormPhaseTwo";
import Thankyou from "@/components/Thankyou";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [formPhase, setFormPhase] = useState(1);
  const [email, setEmail] = useState("");
  const [progress, setProgress] = useState({
    step1: "",
    step2: {
      comfort: "-1",
      looks: "-1",
      price: "-1",
    },
  });

  const fetchDetails = async (email) => {
    try {
      const res = await fetch(`/api/supabase/?email=${email}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await res.json();

      console.log(response);
      if (res.ok) {
        setEmail(response.data.email);
        setProgress(response.data.progress);
        setFormPhase(parseInt(response.data.phase));
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchMongoDetails = async (email) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/user-response/get-data/?email=${email}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      const response = await res.json();

      console.log(response);
      if (res.ok) {
        setFormPhase(4)
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
      fetchMongoDetails(email)
      fetchDetails(email);
    }
  }, []);

  const onProgressChange = (field, value, subField, subFieldValue) => {
    console.log(field, value, subField, subFieldValue);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("email", email);
      const data = {
        email,
        progress,
        phase: formPhase + 1,
      };

      if (formPhase === 3) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/user-response/save-data`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const response = await res.json()

        if(res.ok) {
          setFormPhase(4)
          console.log(response.message)
          return
        } else {
          throw new Error(response.error)
        }
      }

      const res = await fetch(`/api/supabase`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (res.ok) {
        setFormPhase(formPhase + 1);
      } else {
        throw new Error(response.error);
      }
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
      {formPhase === 3 && (
        <FormPhaseThree
          value={progress}
          setValue={onProgressChange}
          setPhase={setFormPhase}
          handleSubmit={handleSubmit}
        />
      )}
      {formPhase === 4 && <Thankyou setPhase={setFormPhase} />}
    </div>
  );
}

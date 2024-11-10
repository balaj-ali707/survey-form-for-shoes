"use client";
import FormPhaseOne from "@/components/FormPhaseOne";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [formPhase, setFormPhase] = useState(1);

  return (
    <div className="h-screen flex flex-row items-center justify-center bg-gradient-to-r from-[#4D4D4D] to-[#010101]">
      {formPhase === 1 && <FormPhaseOne setPhase={setFormPhase} />}
    </div>
  );
}

"use client";

import Homepage from "@/components/home-page";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BMWi8Homepage() {

  const [started, setStarted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const onStart = () => {
    setStarted(true);
    localStorage.setItem("bmw-i8-started", "true");
    const audio = new Audio("/mixkit-cars-starting-1561.wav"); // Place your audio in public/sounds
    audio.play().catch((err) => console.log("Audio play error:", err));
  }

  useEffect(() => {
    const startedInLS = typeof window !== "undefined" ? localStorage.getItem("bmw-i8-started") === "true" : false;
    setStarted(startedInLS);
  }, [])

  return (
    <>
      {
        !started ? (
          <div className="flex h-[80vh] w-full items-center justify-center bg-transparent">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onTapStart={() => setIsPressed(true)}
              onTapCancel={() => setIsPressed(false)}
              onTap={() => setIsPressed(false)}
              onClick={onStart}
              className={`relative hover:scale-[1.1] cursor-pointer active:scale-[0.95] flex h-32 w-32 items-center justify-center rounded-full border-4 transition-all duration-200
${isPressed ? "border-green-400 shadow-[0_0_30px_10px_rgba(34,197,94,0.7)]" : "border-gray-500 shadow-lg"}
bg-gradient-to-br from-gray-800 to-gray-700 text-white font-bold text-xl`}
            >
              {isPressed ? "STARTED" : "START"}

            </motion.button>
          </div>
        ) : (
          <Homepage />
        )
      }
    </>
  );
}

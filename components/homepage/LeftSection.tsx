import React, { useState } from "react";
import useMousePosition from "../useMousePosition";
import { motion } from "framer-motion";

const LeftSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <div className="w-full bg-neutral-900 text-orange-200 overflow-hidden flex items-center justify-center">
      <div className="left-section w-full flex h-screen justify-center items-center">
        <span className="text-9xl font-bold text-center">
          WELCOME <br /> <span>TO</span> <br />
          REACT <br />
          <span>CONNECT</span>
        </span>
      </div>
      <motion.div
        className="left-section-mask w-full flex h-screen justify-center items-center"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <span
          className="text-9xl font-bold text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          PLATFORM <br /> <span>SPECIFICALLY</span>
          <br /> BUILT FOR <br />
          <span>CODERS</span>
        </span>
      </motion.div>
    </div>
  );
};

export default LeftSection;

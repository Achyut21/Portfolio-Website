import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const levitateUp = (delay = 0) => ({
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    delay,
  },
});

const levitateDown = (delay = 0) => ({
  y: [0, 10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "loop",
    delay,
  },
});

const Technologies = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateUp(0) : {}}
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateDown(0.5) : {}}
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateUp(1) : {}}
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateDown(1.5) : {}}
        >
          <DiRedis className="text-7xl text-red-700" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateUp(2) : {}}
        >
          <FaNode className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-purple-100 p-4"
          animate={!isMobile ? levitateDown(2.5) : {}}
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

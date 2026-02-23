import { DiJavascript, DiRedis } from "react-icons/di";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiReactquery, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";
import { GiThumbDown } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";

const iconVariants = {
  initial: { y: -10 },
  animate: (duration: number) => ({
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  }),
};

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={2.1}
        >
          <RiReactjsLine className="text-7xl" style={{ color: "#61DAFB" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={2.1}
        >
          <BiLogoTypescript className="text-7xl" style={{ color: "#3178C6" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={1.5}
        >
          <DiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={2.1}
        >
          <BsGithub className="text-6xl" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={1.5}
        >
          <RiTailwindCssFill
            className="text-7xl"
            style={{ color: "#06B6D4" }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={1.5}
        >
          <SiReactquery className="text-6xl" style={{ color: "#FF4154" }} />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants as any}
          custom={2.7}
        >
          <SiMongodb className="text-7xl" style={{ color: "#47A248" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

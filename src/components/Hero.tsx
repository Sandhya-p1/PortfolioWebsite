import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* image section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center  lg:p-8">
            <motion.img
              src="/sandhya.png"
              className="border  w-full object-cover border-stone-900 rounded-3xl"
              // width={650}
              // height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* introduction section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-18 flex flex-col items-center lg:items-start"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-4xl tracking-tighter text-nowrap lg:text-8xl"
            >
              Sandhya Pandey
            </motion.h2>
            <motion.span
              variants={childVariants}
              className="bg-linear-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              React Developer
            </motion.span>
            <motion.div
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight"
            >
              <p>
                I’m a React-focused web developer passionate about building
                modern, scalable, and high-performance web applications. I
                specialize in React JS, TypeScript and Tailwind CSS, with
                experience in API integration and advanced state management
                using React Query.
              </p>
              <p className="mt-2">
                I enjoy creating clean, reusable components, optimizing
                performance, and implementing real-time and interactive features
                while maintaining strong code quality and logical structure.
              </p>
            </motion.div>
            <motion.a
              variants={childVariants}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white  rounded-full p-4  text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

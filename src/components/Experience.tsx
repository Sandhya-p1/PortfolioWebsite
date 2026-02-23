import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {" "}
        Experience
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
        className="mb-8 flex flex-wrap lg:justify-center"
      >
        <div className="w-full lg:1/4">
          <p className="mb-2 text-sm text-stone-400">Oct 2024 - July 2025</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h3 className="mb-2  text-xl font-semibold">
            Web Developer -{" "}
            <span className="text-sm text-stone-500">Nepal Design Tech</span>
          </h3>
          <p className="mb-4 text-stone-400">
            Worked as a Web Developer contributing to the development and
            enhancement of dynamic web applications. Built and modified frontend
            features while integrating backend functionality to ensure smooth
            data handling and communication between client and server.
            Implemented form processing systems, email functionality, and
            interactive website features that improved usability and
            performance. Collaborated closely with clients to understand
            requirements and deliver customized, scalable web solutions aligned
            with business objectives.
          </p>
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            React.js
          </span>
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            JavaScript
          </span>
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            PHP
          </span>{" "}
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            REST APIs
          </span>{" "}
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            Tailwind CSS
          </span>{" "}
        </div>
      </motion.div>

      {/* exp.2 */}
      <div className="mb-8 flex flex-wrap lg:justify-center">
        <div className="w-full lg:1/4">
          <p className="mb-2 text-sm text-stone-400">April 2024 - June 2024</p>
        </div>
        <div className="w-full max-w-xl lg:w-3/4">
          <h3 className="mb-2 text-xl font-semibold">
            Frontend Developer Intern -{" "}
            <span className="text-sm text-stone-500">Yberri</span>
          </h3>
          <p className="mb-4 text-stone-400">
            Assisted in developing responsive and user-friendly web interfaces
            using modern frontend technologies. Worked on API integrations and
            server-state management to ensure efficient data rendering and
            smooth user experience. Gained hands-on experience with
            authentication systems and real-time database management while
            contributing to performance improvements and UI enhancements across
            company projects.
          </p>
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            React JS
          </span>
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            JavaScript
          </span>{" "}
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            Firebase
          </span>{" "}
          <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300">
            REST APIs
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Experience;

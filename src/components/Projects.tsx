import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="lg:justify-center mb-8 flex flex-wrap"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <img
            src="/socialmedia.avif"
            width={250}
            height={250}
            className="mb-6 rounded-2xl"
          />
        </motion.div>

        <div className="w-full max-w-xl lg:w-3/4">
          <h3 className="mb-2 font-semibold text-2xl">Social Media App</h3>
          <p className="mb-4 text-stone-400 text-lg">
            Built a full-featured social media platform that allows users to
            create accounts, share posts, interact through likes and comments,
            and communicate via real-time chat. The application focuses on
            seamless user experience with instant UI updates, smooth infinite
            scrolling, and responsive design across devices. I implemented
            secure authentication, dynamic feed rendering, and live messaging
            functionality while ensuring efficient data handling and optimized
            performance. The project emphasizes clean architecture, reusable
            components, scalable structure, and modern frontend best practices
            to deliver a production-ready social application.
          </p>
          <div className="flex flex-wrap gap-x-0.5 gap-y-2">
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              React.js
            </span>
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              React Query
            </span>
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              Express.js
            </span>
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              Mongo DB
            </span>
            <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-30">
              Socket IO
            </span>
          </div>
          <div className="mt-6 text-stone-200">
            Project Link :{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://facebook-chat-app-yjso.vercel.app/login"
              className="underline text-blue-400"
            >
              FacebookChatApp
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;

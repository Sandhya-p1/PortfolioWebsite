import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">Nepal, Kapilvastu</p>
        <p className="my-4">
          <motion.a
            whileHover={{
              scale: 1.05,
              color: "#ffffff",
            }}
            whileFocus={{
              scale: 1.05,
              textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            href="tel:9827490746"
            className="border-b"
          >
            +977 9827490746
          </motion.a>
        </p>
        <motion.a
          whileHover={{
            scale: 1.05,
            color: "#ffffff",
          }}
          whileFocus={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          href="mailto:p91sandhya@gmail.com?subject=2 Minute Metting Inquiry&body=Hi, I saw your portfiolio."
          className="border-b"
        >
          p91sandhya@gmail.com
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

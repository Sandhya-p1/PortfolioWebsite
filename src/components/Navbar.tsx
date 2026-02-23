import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <p className="italic text-3xl">Sp</p>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sandhya-pandey10/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />{" "}
        </a>
        <a
          href="https://github.com/Sandhya-p1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />{" "}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

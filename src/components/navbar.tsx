import logo from "../assets/AK-wl.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="MyLogo" className="mx-2 w-10 h-10" />
      </div>
      <video
        src="src/assets/blackhole.webm"
        type="video/webm"
        className="absolute rotate-180 top-[-340px] left-0 w-full h-[650px] lg:w-full lg:h-[700px] -z-10 object-cover overflow-hidden opacity-90"
        autoPlay
        loop
        muted
      />
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/achyutkatiyar2103/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Achyut21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/waterlaw_attinx/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a className="hidden md:block" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

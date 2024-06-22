import logo from "../assets/AK-wl.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="MyLogo" className="mx-2 w-10 h-10" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitterSquare />
      </div>
    </nav>
  );
};

export default Navbar;

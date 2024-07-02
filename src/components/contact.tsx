import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        className="my-10 text-center text-4xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          className="my-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          className="my-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          className="border-b"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {CONTACT.email}
        </motion.a>
        <motion.p
          className="my-4"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
         <div className="m-8 flex items-center justify-center gap-4 text-3xl md:hidden sm:block">
        <a href="https://www.linkedin.com/in/achyutkatiyar2103/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Achyut21" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/waterlaw_attinx/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;

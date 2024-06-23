import { CONTACT } from "../constants";
import { motion } from "framer-motion";

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
      </div>
    </div>
  );
};

export default Contact;

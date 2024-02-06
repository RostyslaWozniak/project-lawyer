import { motion } from "framer-motion";
const Heading = () => {
  const heading = "Your responsible legal partner";
  const splitHeading = heading.split("");
  const animatedHeading = splitHeading.map((letter, id) => (
    <motion.span
      key={id}
      className="relative tracking-widest"
      initial={{ opacity: 0, top: -100 }}
      whileInView={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.5, delay: id * 0.04 }}
      viewport={{ once: true }}
    >
      {letter}
    </motion.span>
  ));
  return (
    <h1 className="md:heading-2 text-3xl font-medium">{animatedHeading}</h1>
  );
};

export default Heading;

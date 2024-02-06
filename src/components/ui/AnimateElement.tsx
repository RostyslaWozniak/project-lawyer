import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type AnimateElementProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  repeat?: boolean;
};
const AnimateElement = ({
  children,
  className,
  delay = 0.3,
  duration = 0.5,
  repeat = false,
}: AnimateElementProps) => {
  return (
    <motion.div
      className={twMerge(className)}
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: !repeat }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateElement;

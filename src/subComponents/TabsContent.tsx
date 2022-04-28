import * as React from "react";
import { motion } from "framer-motion";

interface ITabContentProps {
  toggleState: number;
  tabNumber: number;
}

// framer
const bottomVariants = {
  initial: {
    opacity: 0,
    transition: { type: "spring", duration: 1.5, delay: 0.8 },
  },
  animate: {
    opacity: 1,
    transition: { type: "spring", duration: 1.5, delay: 0.8 },
  },
};

const TabContent: React.FunctionComponent<ITabContentProps> = ({
  toggleState,
  tabNumber,
  children,
}) => {
  return (
    <motion.div
      className={toggleState === tabNumber ? "block" : "hidden"}
      variants={bottomVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default TabContent;

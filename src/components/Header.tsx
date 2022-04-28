import * as React from "react";
import "../App.css";
import { SvgComponent } from "../svg/svg";
import { motion } from "framer-motion";

interface IHeaderProps {}
//framer
const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: { type: "spring", duration: 1, delay: 1 },
  },
};

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <motion.header
      className="bg-slate-200"
      variants={headerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <nav>
        <div className="max-w-7x1 mx-auto py-2 h-[10vh] flex justify-center items-center header">
          <SvgComponent />
          <h1>Pokemon</h1>
          <SvgComponent />
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

import { motion } from "framer-motion";
import "../index.css"

const ScrollIndicator = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, 10, 0] }} 
      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} 
      className="scrollIndicator w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300 cursor-pointer absolute mb-16"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
};   

export default ScrollIndicator;


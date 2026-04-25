import { motion } from "framer-motion";
import PropTypes from "prop-types";

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08
    }
  }
};

const child = {
  hidden: {
    y: 48,
    opacity: 0,
    filter: "blur(8px)"
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function SplitText({ text, className = "", highlightWord = "" }) {
  const words = text.split(" ");

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.7 }}
    >
      {words.map((word, index) => {
        const highlight = highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase());

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={child}
            className={`inline-block ${highlight ? "text-brand-red" : ""}`}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

SplitText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  highlightWord: PropTypes.string
};

export default SplitText;

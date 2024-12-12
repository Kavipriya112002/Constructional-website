import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const RightAnimatedImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
    >
      <img src={src} alt={alt} className={className} />
    </motion.div>
  );
};

export default RightAnimatedImage;
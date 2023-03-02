import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  leftAnimation: boolean;
  delay?: number;
  className?: string;
};

const AnimationContainer = ({
  children,
  leftAnimation,
  className,
  delay = 0,
}: Props) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.75, delay: delay }}
      variants={{
        hidden: { opacity: 0, x: leftAnimation ? -75 : 75 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;

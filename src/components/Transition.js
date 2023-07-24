import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.51,
      ease: "easeInOut",
    },
  },
  in: {
    x: 0,
    opacity: 0.81,
    transition: {
      duration: 0.51,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0.01,
    x: -1000,
    transition: {
      duration: 0.51,
      ease: "easeInOut",
    },
  },
};

const variants_2 = {
  scaleDown: {
    scale: 0.8,
    y: 100,
    transition: {
      duration: 0.4,
    },
  },
  out: {
    x: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
  in: {
    scale: 0.8,
    y: 100,
    x: "100%",
    transition: {
      duration: 0.4,
    },
  },
  center: {
    x: 0,
    scale: 0.8,
    transformOrigin: "top",
    transition: {
      duration: 0.4,
    },
  },
  scaleUp: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5,
    },
  },
};

export default function Transition({ children }) {
  const { asPath } = useRouter();

  return (
    <div className="effect-1">
      <AnimatePresence
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.div
          // key={asPath}
          // variants={variants_2}
          // initial="in"
          // exit="out"
          // animate={["center", "scaleUp"]}
          // exit={["scaleDown", "out"]}
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

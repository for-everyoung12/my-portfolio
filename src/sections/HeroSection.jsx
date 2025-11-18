import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Header from "../components/Header";
import videoSrc from "../assets/video/qc.mp4";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function HeroSection() {
  // chỉ dùng trục X
  const x = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;

    const deltaX = e.clientX - centerX;

    x.set(deltaX / 0.8);
  };

  const handleMouseLeave = () => {
    x.set(0);
  };

  return (
    <motion.section
      id="hero-section"
      initial="hidden"
      animate="show"
      variants={fadeIn}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[100svh] snap-start overflow-hidden bg-neutral-100 px-[clamp(0.5rem,2vw,2.5rem)] text-black"
    >
      <Header />

      {/* CARD ĐEN GIẢ LẬP VIDEO – CHỈ DI CHUYỂN THEO TRỤC X */}
      <motion.div
        style={{ x: xSpring }}
        className="pointer-events-none absolute left-1/2 top-[38%] h-[360px] w-[660px] -translate-x-1/2 -translate-y-1/2 rounded-xl  overflow-hidden z-1"
      >
        <video src={videoSrc} autoPlay loop className="h-full"/>
      </motion.div>

      <div className="flex h-full flex-col justify-between pt-32 lg:pt-66">
        <div className="mt-24 flex flex-col gap-2 sm:mt-32 sm:gap-4">
          <motion.div
            custom={0.1}
            variants={fadeIn}
            className="relative flex w-full items-start text-[clamp(20px,0.9vw,16px)] font-semibold uppercase text-black"
          >
            <span className="font-semibold">A</span>
            <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-black">
              Seriously
            </span>
            <span className="ml-auto text-right">Good</span>
          </motion.div>

          <motion.div
            custom={0.25}
            variants={fadeIn}
            className="-mx-[clamp(0.5rem,2vw,2.5rem)] overflow-hidden px-[clamp(0.5rem,2vw,2.5rem)]"
          >
            <div
              className="mt-[-0.1rem] flex items-baseline justify-between text-[clamp(2.5rem,8.6vw,10rem)] font-black uppercase leading-[1] tracking-[-0.02em] -translate-x-[0.07em]"
              style={{ transform: "scaleY(1.2)", transformOrigin: "center" }}
            >
              <span>FRONTEND</span>
              <span>DEVELOPER</span>
            </div>
          </motion.div>
        </div>

        <footer className="absolute bottom-4 left-5 flex w-full items-center justify-start text-[20px] text-black">
          <div className="flex items-center gap-2">
            <ArrowDown className="h-5 w-5" strokeWidth={1.5} />
            <span>Scroll for</span>
          </div>
        </footer>
      </div>
    </motion.section>
  );
}

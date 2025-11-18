import { MotionConfig } from "framer-motion";
import HeroSection from "./sections/HeroSection";


export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection />
    </MotionConfig>
  );
}

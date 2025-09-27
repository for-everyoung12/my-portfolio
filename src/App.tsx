import { MotionConfig, motion, type Variants } from "framer-motion";
import { SocialRow } from "./components/SocialRow";
// import LinkCard from "./components/LinkCard";

const shell: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-dvh bg-[#f4f5ff] text-zinc-900">
        <div className="mx-auto flex max-w-md flex-col items-center px-4 py-10">
          <motion.div
            variants={shell}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={item}
              className="mb-4 h-20 w-20 overflow-hidden rounded-full shadow"
            >
              <img
                src="/avatar.jpg"
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </motion.div>

            <motion.h1 variants={item} className="text-lg font-semibold">
              Tran Hai Son
            </motion.h1>
            <motion.p variants={item} className="text-[16px] text-zinc-500  ">
              Software Developer
            </motion.p>

            <motion.div variants={item} className="mt-4">
              <SocialRow />
            </motion.div>
          </motion.div>

          {/* Card */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 w-full"
          >
            <LinkCard
              imageSrc="/vietnam.png"
              title="National Day"
              description={
                <>
                  <em>“National Day”</em> — Kỷ niệm ngày 2/9/1945, khi Chủ tịch Hồ Chí Minh
                  đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, Hà Nội, khai sinh nước
                  Việt Nam Dân chủ Cộng hòa. Đây là ngày lễ lớn của dân tộc, đánh dấu bước
                  ngoặt lịch sử giành lại độc lập tự do sau nhiều năm đấu tranh.
                </>
              }
              buttonText="Get the Kit"
              href="#"
            />
          </motion.div> */}

          {/* Footer */}
          <footer className="mt-8 text-xs opacity-60">
            © 2025 Tran Hai Son | All rights reserved
          </footer>
        </div>
      </main>
    </MotionConfig>
  );
}

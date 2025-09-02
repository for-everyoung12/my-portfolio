import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const container = { show: { transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/haisown.t/", label: "Instagram" },
  { icon: FaGithub, href: "https://github.com/for-everyoung12", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/h%E1%BA%A3i-s%C6%A1n-tr%E1%BA%A7n-123795281/", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:haison121202@gmail.com", label: "Email" }
];

export function SocialRow() {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center gap-3"
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <motion.li key={label} variants={item}>
          <a
            href={href}
            aria-label={label}
            className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:bg-zinc-50"
          >
            <Icon className="text-[25px]" />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  );
}

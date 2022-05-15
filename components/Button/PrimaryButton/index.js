import { motion } from "framer-motion";
export default function PrimaryButton({ text, href = "#" }) {
  return (
    <motion.a
      className="btn--clean btn-primary"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </motion.a>
  );
}

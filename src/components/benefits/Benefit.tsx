import { LearnMoreType } from "@/shared/types/BenefitType";
import LearnMore from "@/shared/ui/LearnMore";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Benefit = ({
  icon,
  title,
  description,
  setSelectedPage,
}: LearnMoreType) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-8 py-16"
      variants={childVariant}
    >
      <div className="mb-4 flex flex-col items-center justify-center gap-4">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-center">{description}</p>
        <LearnMore setSelectedPage={setSelectedPage} />
      </div>
    </motion.div>
  );
};

export default Benefit;

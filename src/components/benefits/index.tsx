import { SelectedPage } from "@/shared/types/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Htext from "@/shared/ui/Htext";
import { BenefitType, SetSelectedPageType } from "@/shared/types/BenefitType";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ui/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const Benefits = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section id="benefits" className="mx-auto my-20 min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <motion.div
          className="md:my-5 md:mx-auto md:w-3/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext className="text-center">MORE THAN JUST GYM</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit, index) => {
            return (
              <Benefit
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>

        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="Benefits PAge Graphic"
          />

          <div className="mt-16">
            <div className="relative">
              <div className="text-center before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-waves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.75 }}
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    Millions Of Happy Members Getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htext>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.75 }}
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
                cum eaque enim unde laboriosam, inventore facilis minus illo
                quibusdam? In doloribus placeat ea quam adipisci vel veniam enim
                harum. Est quasi corporis ratione similique dolorum delectus in,
                aliquid neque, ullam quod, ad ipsam rem id assumenda aperiam?
                Excepturi, distinctio aliquam.
              </p>

              <p className="mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                inventore ducimus rem quasi, sed et provident. Maxime debitis
                dolor doloremque.
              </p>
            </motion.div>

            <motion.div
              className="relative mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.75 }}
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:right-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

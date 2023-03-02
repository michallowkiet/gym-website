import { SetSelectedPageType } from "@/shared/types/BenefitType";
import Htext from "@/shared/ui/Htext";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import { ClassType, SelectedPage } from "@/shared/types/types";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: SetSelectedPageType) => {
  return (
    <section id="ourclasses" className="bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mx-auto  w-5/6"
      >
        <div className="mx-auto w-3/5">
          <Htext className="text-center">Our Classes</Htext>
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            excepturi dolore, rem magnam quidem inventore tenetur corporis autem
            aperiam architecto unde debitis cum quisquam distinctio. Corporis
            deleniti dolorem ratione labore!
          </p>
        </div>
      </motion.div>

      <motion.div
        className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.75 }}
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ul className="w-[2800px] whitespace-nowrap">
          {classes.map((item, index) => {
            return (
              <Class
                key={index}
                image={item.image}
                name={item.name}
                description={item.description}
              />
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default OurClasses;

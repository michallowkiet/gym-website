import { SetSelectedPageType } from "@/shared/types/BenefitType";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types/types";
import Htext from "@/shared/ui/Htext";
import AnimationContainer from "@/shared/ui/AnimationContainer";
import { FormEventHandler } from "react";

const ContactUs = ({ setSelectedPage }: SetSelectedPageType) => {
  const inputStyle = `mt-4 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-4`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <AnimationContainer
          className="mx-auto text-center md:w-3/5"
          leftAnimation={false}
        >
          <Htext>
            <span className="text-primary-500">Join Now</span> To Get In Shape
          </Htext>

          <p className="my-5 text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            nesciunt praesentium laudantium doloremque quod, ut nihil
            necessitatibus quis nisi reprehenderit corrupti ab, ad, a
            perspiciatis!
          </p>
        </AnimationContainer>

        <div className="mt-10 justify-between gap-8 md:flex">
          <AnimationContainer
            className="mx-auto mt-10 basis-3/5 md:mt-0"
            leftAnimation={false}
            delay={0.2}
          >
            <form
              className="text-center"
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/41224289b5e1b787493f28a940f9f3a3"
            >
              <input
                className={inputStyle}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
              {errors.name && (
                <p className=" text-primary-500">
                  {errors?.name?.type === "required" &&
                    "This field is required"}
                  {errors?.name?.type === "maxLength" &&
                    "Max length for Name field is 50 characters."}
                </p>
              )}

              <input
                className={inputStyle}
                placeholder="EMAIL"
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.name && (
                <p className=" text-primary-500">
                  {errors?.email?.type === "required" &&
                    "This field is required"}
                  {errors?.email?.type === "pattern" && "Invalid email address"}
                </p>
              )}

              <textarea
                rows={6}
                placeholder="MESSAGE"
                className={inputStyle}
                {...register("message", {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {errors.name && (
                <p className=" text-primary-500">
                  {errors?.message?.type === "required" &&
                    "This field is required"}
                  {errors?.message?.type === "maxLength" &&
                    "Max length for Name field is 1000 characters."}
                </p>
              )}

              <button
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 text-lg font-bold transition duration-500 hover:text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </AnimationContainer>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

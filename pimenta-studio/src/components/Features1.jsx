import { motion } from "framer-motion";

import feature from "../assets/images/it-image.svg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8  mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0    md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                <span className="block-subtitle">Pimenta TI</span>
                <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                  Servicios de Tecnologías de la Información
                </h2>
                <p className="mb-10 text-secondaryText leading-loose">
                  Desarrollamos aplicaciones tecnológicas de varios tipos para desarrollar tu negocio y lograr que se adapte a las constantes novedades del mundo digital.
                </p>
                <ul className="mb-6 text-primaryText">
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Aplicaciones Web Responsivas</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Aplicaciones de Escritorio</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>E-commerce</span>
                  </li>
                  <li className="mb-4 flex">
                    <CheckArrowIcon />
                    <span>Implementación de Inteligencia Artificial</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-last">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={feature.src}
                  alt="Feature image 6"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

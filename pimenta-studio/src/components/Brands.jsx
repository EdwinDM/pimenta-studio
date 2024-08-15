import { motion } from "framer-motion";

import ticomotor from "../assets/logos/ticomotor.svg";
import ticostatravels from "../assets/logos/ticostatravels.svg";
import gameplace from "../assets/logos/gameplace.svg";
import cabanasdonramiro from "../assets/logos/cabanasdonramiro.svg";

export const Brands = () => (
  <section className="py-12 sm:py-24 bg-bgDark1 w-full  lg:mt-16 mb-8 lg:mb-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container px-4 mx-auto 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-4/5">
        <div className="flex lg:flex-row flex-col items-center -mx-4 justify-center lg:text-left text-center">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-2  text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-primaryText">
                Ellos confiaron
              </h2>
              <h2 className=" text-4xl  sm:text-5xl 2xl:text-6xl font-bold tracking-normal text-secondaryColor">
                en nosotros
              </h2>
            </div>
          </div>
          <div className="w-2/3 sm:w-[620px] lg:w-1/2 mx-auto lg:mx-0 lg:pl-10">
            <div className="flex flex-wrap -m-4 center justify-center">
              <a className="w-1/2 sm:w-1/3 py-6 mx-3 flex justify-center">                
                  <img
                    src={ticomotor.src}
                  />                
              </a>
              <a className="w-1/2 sm:w-1/3 py-6 mx-3 flex justify-center">  
                <img
                  src={gameplace.src}
                />
              </a>
              <a className="w-1/2 sm:w-1/3 py-6 mx-3 flex justify-center" href="https://www.facebook.com/profile.php?id=100093635497298&paipv=0&eav=Afbpz_rmfqoCaFNUNckraNl19CAFDd-i4zC3GmDyUOK6k3_fYRXqSr9aGjdsVAqhr1Y" Target="_blank">  
                <img
                  src={ticostatravels.src}
                />
              </a>
              <a className="w-3/4 sm:w-1/2 py-6 mx-3 flex justify-center" href="https://cabañasdonramiro.com" Target="_blank">  
                <img
                  src={cabanasdonramiro.src}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

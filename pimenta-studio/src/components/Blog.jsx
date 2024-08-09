import { motion } from "framer-motion";

import blog1 from "../assets/images/blog1.png";

const blogData = [
  {
    title: "IA y Aprendizaje Automático",
    subtitle:
      "Descubra noticias y tendencias en el mundo del análisis de datos. Profundice en cómo la IA y el aprendizaje automático están revolucionando las industrias.",
    image: blog1.src,
  }
];

export const Blog = () => (
  <section className="w-screen flex justify-center bg-bgDark2 relative ">
    <div className="absolute -top-16" id="blog" />
    <div className="pb-0 pt-4 bg-bgDark2 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        flex justify-center
      >
        <div className="container px-4 mb-20">
          <div className="max-w-2xl mb-16 m-auto text-center">
            <span className="block-subtitle">Nuestro Blog</span>
            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
              Últimas Noticias
            </h2>
            <p className="mb-6 text-secondaryText">
              Manténgase al día de las últimas tendencias y perspectivas de nuestro sector.
            </p>
          </div>
          <div className="flex justify-center 2xl:w-[1200px] lg:w-[1000px] xl:w-[1150px] flex-wrap -mx-4 items-start h-auto sm:h-[30rem] lg:h-[31rem]  xl:h-[35rem]">
            <div className="flex lg:flex w-11/12 sm:ml-0 sm:mr-0 lg:w-1/2 xl:w-3/5 px-4 mb-8 lg:mb-0 h-full">
              <a href="/blog/article" className="m-auto w-full">
                <div className="p-6 sm:p-10 bg-bgDark3 rounded-3xl h-full hover:bg-bgDark3Hover transition cursor-pointer">
                  <img
                    src={blogData[0].image}
                    alt={blogData[0].title}
                    className="rounded-3xl mb-6 w-full"
                    aria-label={blogData[0].title}
                  />
                  <h3 className="mb-4 text-2xl font-bold font-heading text-primaryText">
                    {blogData[0].title}
                  </h3>
                  <p className="text-secondaryText leading-loose">
                    {blogData[0].subtitle}
                  </p>
                </div>
              </a>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
);
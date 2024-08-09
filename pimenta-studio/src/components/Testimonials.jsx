import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Carlos Herrera",
    customerTitle: "Dueño de Ticomotor",
    content:
      "Contratar a esta empresa fue una de las mejores decisiones para mi negocio. El equipo es profesional y siempre está disponible para escuchar mis necesidades. El diseño de mi folleto y las piezas para redes sociales fueron impresionantes y me ayudaron a captar más clientes. Sin duda, seguiré trabajando con ellos.",
    image: testimonial1,
  },
  {
    customerName: "Mariana Torres",
    customerTitle: "Coordinadora de Marketing",
    content:
      "Trabajar con este equipo fue una experiencia excelente. Entendieron perfectamente nuestra visión y la convirtieron en diseños atractivos y efectivos. La rapidez y la calidad de su trabajo son inigualables. Además, su consultoría en branding nos ayudó a fortalecer nuestra identidad corporativa. ¡Altamente recomendados!",
    image: testimonial2,
  },
  {
    customerName: "Alex Valverde",
    customerTitle: "Dueño de Ticosta Travels",
    content:
      "La atención al detalle y la creatividad del equipo superaron todas mis expectativas. El logo y la imagen de mi marca quedaron perfectos, exactamente como lo imaginaba. Además, fueron muy pacientes durante todo el proceso, asegurándose de que cada detalle estuviera a mi gusto. ¡Recomiendo sus servicios al 100%!",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-bgDark2 relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">Testimonios</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          A la gente como tú le encanta Tailcast
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div>
                  <img
                    src={testimonial.image.src}
                    alt="Customer avatar"
                    width="45px"
                    height="5px"
                    aria-label={testimonial.customerName}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

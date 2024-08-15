import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/testimonial1.png";
import testimonial2 from "../assets/images/testimonial2.png";
import testimonial3 from "../assets/images/testimonial3.png";

const testimonialsData = [
  {
    customerName: "Rosa Ramírez",
    customerTitle: "Dueña de Cabañas Don Ramiro",
    content:
      "Estoy muy satisfecha con el trabajo de la Pimenta en el desarrollo de la página web para nuestro lodge. Capturaron exactamente la esencia de nuestro negocio, creando un sitio atractivo y funcional que ha mejorado nuestra visibilidad y aumentado las reservas. La comunicación fue clara y el proceso, eficiente. Sin duda, una excelente inversión para nuestro negocio.",
    image: testimonial1,
  },
  {
    customerName: "Carlos Villachica",
    customerTitle: "Dueño de Ticosta Travels",
    content:
      "Supieron plasmar en una identidad visual moderna y atractiva lo que a nuestra empresa nos distingue en el mercado turístico. Desde el logo hasta los materiales promocionales, todo quedó impecable y alineado con nuestra visión. Gracias a su creatividad y profesionalismo, hemos logrado destacar y conectar mejor con nuestros clientes.",
    image: testimonial2,
  },
  {
    customerName: "Lorena Narváez",
    customerTitle: "Dueña de PodoSalud",
    content:
      "La atención al detalle y la creatividad del equipo superaron mis expectativas. La imagen de mi marca quedaron exactamente como lo imaginaba e integraron un sistema de reservas muy fácil de usar para nuestros pacientes. Fueron muy pacientes durante todo el proceso, asegurándose de que cada detalle estuviera a mi gusto. ¡Recomiendo sus servicios al 100%!",
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
          A la gente como tú le encanta Pimenta
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

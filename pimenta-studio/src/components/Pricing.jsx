import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const basicData = [
  "Diseño de logotipo básico",
  "Tarjeta de presentación",
  "Dos revisiones por proyecto",
  "Diseño de una pieza gráfica para redes sociale",
  "Archivo final en formato PNG y PDF",
];

const mediumData = [
  "Diseño de Logotipo Avanzado con Variantes",
  "Diseño Personalizado de Tarjetas de Presentación",
  "Diseño de Flyer o Folleto",
  "Cuatro Revisiones por Proyecto",
  "Diseño de Tres Piezas Gráficas para Redes Sociales"
];

const advanceData = [
  "Diseño de Logotipo Premium con Guía de Uso",
  "Diseño de Tarjetas de Presentación y Papelería Corporativa",
  "Diseño de Catálogo o Brochure de 8 Páginas",
  "Diseño de Seis Piezas Gráficas para Redes Sociales",
  "Revisiones Ilimitadas y Consultoría en Branding"
];

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">Escuentra el que se ajuste a tus necesidades</span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Elige tu mejor plan
              </h2>
              <p className="mb-6 text-secondaryText">
                Selecciona el plan que se ajuste a tus necesidades y beneficios para tus proyectos.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Intermedio
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      $450
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Perfecto para empresas en crecimiento que buscan un diseño más completo.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {mediumData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://api.whatsapp.com/send?phone=63536621&text=Hola,%20estoy%20interesado%20en%20el%20plan%20intermedio.%20Quiero%20más%20información." target="_blank">
                    <button
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16" 
                      aria-label="Get started"
                    >
                      ¡Quiero este!
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-primaryText text-left">
                    Completo
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                      $500
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    La solución integral para empresas que necesitan un diseño profesional y versátil.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {advanceData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://api.whatsapp.com/send?phone=63536621&text=Hola,%20estoy%20interesado%20en%20el%20plan%20Completo.%20Quiero%20más%20información." target="_blank">
                    <button
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16" 
                      aria-label="Get started"
                    >
                      ¡Quiero este!
                    </button>
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-bgDark3 rounded-3xl">
                  <h3 className="mb-2 text-xl font-bold font-heading text-primaryText text-left">
                    Básico
                  </h3>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-primaryText text-left mt-4 mr-2">
                     $200
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    Ideal para proyectos sencillos y clientes que requieren lo esencial.
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-primaryText">
                    {basicData.map((text, index) => (
                      <li className="mb-4 flex" key={`${text}-${index}`}>
                        <CheckArrowIcon />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://api.whatsapp.com/send?phone=63536621&text=Hola,%20estoy%20interesado%20en%20el%20plan%20básico.%20Quiero%20más%20información." target="_blank">
                    <button
                      className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl contained-button font-bold leading-loose mt-16" 
                      aria-label="Get started"
                    >
                      ¡Quiero este!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

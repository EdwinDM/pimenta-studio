import { useState } from "react";
import { motion } from "framer-motion";
import pimenta_multimedia from "../assets/logos/pimenta-multimedia.svg";
import pimenta_informatica from "../assets/logos/pimenta-informatica.svg";

const optionsData1 = [
  { text: "Diseño de Logotipo Premium con Guía de Uso", price: 100 },
  { text: "Diseño de Tarjetas de Papelería Corporativa", price: 80 },
  { text: "Diseño de Catálogo o Brochure de 8 Páginas", price: 120 },
  { text: "Diseño de Seis Piezas Gráficas para Redes Sociales", price: 90 },
  { text: "Revisiones Ilimitadas y Consultoría en Branding", price: 110 }
];

const optionsData2 = [
  { text: "Desarrollo de Página Web Corporativa", price: 150 },
  { text: "Optimización SEO para Motores de Búsqueda", price: 100 },
  { text: "Mantenimiento y Soporte Técnico Web", price: 120 },
  { text: "Integración de Comercio Electrónico", price: 200 },
  { text: "Administración de Páginas Web", price: 90 }
];

export const Pricing = () => {
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const handleOptionChange1 = (option) => {
    setSelectedOptions1((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
  };

  const handleOptionChange2 = (option) => {
    setSelectedOptions2((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
  };

  const handleButtonClick = () => {
    const message = `Hola buenas, estoy interesado en estos servicios para mi negocio. Quiero más información.\n\nServicios de Tecnología:\n${selectedOptions1
      .map((option) => `- ${option}`)
      .join("\n")}\n\nServicios de Multimedia:\n${selectedOptions2
      .map((option) => `- ${option}`)
      .join("\n")}\n\nMuchas gracias.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=63536621&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const totalPrice1 = optionsData1
    .filter((option) => selectedOptions1.includes(option.text))
    .reduce((acc, option) => acc + option.price, 0);

  const totalPrice2 = optionsData2
    .filter((option) => selectedOptions2.includes(option.text))
    .reduce((acc, option) => acc + option.price, 0);

  return (
    <section className="w-screen flex flex-col items-center bg-bgDark2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-bgDark2 2xl:w-[1150px] lg:w-[1050px] md:w-4/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="block-subtitle">
                Encuentra el que se ajuste a tus necesidades
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-primaryText">
                Crea el plan justo para ti
              </h2>
              <p className="mb-6 text-secondaryText">
                Puedes crear un plan que se ajuste a tus necesidades y presupuesto para tus proyectos.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mt-20">
              <div className="px-4 mb-8 lg:mb-0 flex justify-center">
                <div className="px-6 py-6 sm:px-8 pt-14 bg-bgDark3 rounded-3xl inline-block max-w-md sm:max-w-lg">
                  <img
                    src={pimenta_multimedia.src}
                    alt="Imagen del plan 1"
                    className="mx-auto mb-4"
                  />
                  <div className="text-3xl sm:text-4xl font-bold text-primaryText text-center mt-4">
                    Precio: ${totalPrice1}
                  </div>
                  <p className="mt-4 mb-6 text-gray-500 leading-loose text-center">
                    {selectedOptions1.length >= 5
                      ? "¡Super bien, has elegido un plan completo y versatil!"
                      : selectedOptions1.length >= 3
                      ? "¡Excelente, un par de opciones es lo ideal!"
                      : selectedOptions1.length >= 1
                      ? "¡Genial, eso es perfecto para comenzar!"
                      : "Selecciona las opciones que más te convengan."}
                  </p>
                  <ul className="mb-8 text-primaryText text-left">
                    {optionsData1.map((option, index) => (
                      <li
                        className="mb-4 flex items-center justify-start"
                        key={`${option.text}-${index}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions1.includes(option.text)}
                          onChange={() => handleOptionChange1(option.text)}
                          className="mr-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-4 mb-8 lg:mb-0 flex justify-center">
                <div className="px-6 py-6 sm:px-8 pt-14 bg-bgDark3 rounded-3xl inline-block max-w-md sm:max-w-lg">
                  <img
                    src={pimenta_informatica.src}
                    alt="Imagen del plan 2"
                    className="mx-auto mb-4"
                  />
                  <div className="text-3xl sm:text-4xl font-bold text-primaryText text-center mt-4">
                    Precio: ${totalPrice2}
                  </div>
                  <p className="mt-4 mb-6 text-gray-500 leading-loose text-center">
                    {selectedOptions2.length >= 5
                      ? "¡Super bien, has elegido un plan completo y versatil!"
                      : selectedOptions2.length >= 3
                      ? "¡Excelente, un par de opciones es lo ideal!"
                      : selectedOptions2.length >= 1
                      ? "¡Genial, eso es perfecto para comenzar!"
                      : "Selecciona las opciones que más te convengan."}
                  </p>
                  <ul className="mb-8 text-primaryText text-left">
                    {optionsData2.map((option, index) => (
                      <li
                        className="mb-4 flex items-center justify-start"
                        key={`${option.text}-${index}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions2.includes(option.text)}
                          onChange={() => handleOptionChange2(option.text)}
                          className="mr-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleButtonClick}
                className="inline-block text-center py-2 px-4 rounded-xl contained-button font-bold leading-loose"
                aria-label="Get started"
              >
                ¡Quiero Cotizar!
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
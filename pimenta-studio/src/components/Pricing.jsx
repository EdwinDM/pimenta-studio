import { useState } from "react";
import { motion } from "framer-motion";

const optionsData = [
  { text: "Diseño de Logotipo Premium con Guía de Uso", price: 100 },
  { text: "Diseño de Tarjetas de Presentación y Papelería Corporativa", price: 80 },
  { text: "Diseño de Catálogo o Brochure de 8 Páginas", price: 120 },
  { text: "Diseño de Seis Piezas Gráficas para Redes Sociales", price: 90 },
  { text: "Revisiones Ilimitadas y Consultoría en Branding", price: 110 }
];

export const Pricing = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevState) =>
      prevState.includes(option)
        ? prevState.filter((item) => item !== option)
        : [...prevState, option]
    );
  };

  const handleButtonClick = () => {
    const message = `Hola buenas, estoy interesado en estos servicios para mi negocio. Quiero más información.\n\n${selectedOptions
      .map((option) => `- ${option}`)
      .join("\n")}\n\nMuchas gracias.`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=63536621&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  // Calculate the total price based on selected options
  const totalPrice = optionsData
    .filter((option) => selectedOptions.includes(option.text))
    .reduce((acc, option) => acc + option.price, 0);

  // Determine the description based on the number of selected options
  let description;
  const numOptions = selectedOptions.length;
  if (numOptions >= 5) {
    description = "¡Super bien, has elegido un plan completo y versatil!";
  } else if (numOptions >= 3) {
    description = "¡Excelente, un par de opciones es lo ideal!";
  } else if (numOptions >= 1) {
    description = "¡Genial, eso es perfecto para comenzar!";
  } else {
    description = "Selecciona las opciones que más te convengan.";
  }

  return (
    <section className="w-screen flex justify-center bg-bgDark2 relative">
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

            <div className="-mx-4 items-center mt-20">
              <div className="px-4 mb-8 lg:mb-0 flex justify-center">
                <div className="px-6 py-6 sm:px-8 sm:py-8 bg-bgDark3 rounded-3xl inline-block max-w-md sm:max-w-lg">
                  <div className="text-3xl sm:text-4xl font-bold text-primaryText text-center mt-4">
                    Precio: ${totalPrice}
                  </div>
                  <p className="mt-4 mb-6 text-gray-500 leading-loose text-center">
                    {description}
                  </p>
                  <ul className="mb-2 sm:mb-6 text-primaryText text-left">
                    {optionsData.map((option, index) => (
                      <li
                        className="mb-4 flex items-center justify-start"
                        key={`${option.text}-${index}`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(option.text)}
                          onChange={() => handleOptionChange(option.text)}
                          className="mr-2 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span>{option.text}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={handleButtonClick}
                    className="inline-block text-center py-2 px-4 rounded-xl contained-button font-bold leading-loose mt-8 sm:mt-16 m-auto"
                    aria-label="Get started"
                  >
                    ¡Quiero este!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
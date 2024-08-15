import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="w-screen h-screen flex justify-center items-center bg-bgDark1 hero-bg-gradient"
      id="home"
    >
      <div className="w-full flex flex-col justify-center items-center text-center px-4 md:px-20 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 font-bold">
            Descubre un nuevo mundo
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-wide text-primaryText">
            <h1>Desarrollo Profesional</h1>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-wide text-primaryText">
            para tu Negocio
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-8 sm:mt-10 px-8 lg:px-24 xl:px-36 max-w-6xl">
            Nos especializamos en desarrollar fórmulas para que tu negocio crezca utilizando las más recientes novedades y tecnologías a tu favor. Contamos con espacios personalizados.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-10 sm:mt-12 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=63536621&text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20Quiero%20más%20información."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 mb-2 sm:mb-0"
                aria-label="Get started"
              >
                Contáctanos
              </button>
            </a>
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              aria-label="Live demo"
              onClick={() => window.location.href = '/#pricing'}
            >
              Crear planes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
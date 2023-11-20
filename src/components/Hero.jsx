import React from "react";

const Hero = () => {
  return (
    <div className="hero lg:max-h-[1440px * 0.90] py-4 md:py-14">
      <div className="grid grid-cols-12 grid-rows-6 gap-4">
        <div className="col-start-1 col-end-6 row-start-1 row-end-7  h-full flex flex-col">
          <div className="w-full z-50  bg-neutral rounded-tr-xl rounded-tl-xl">
            <h2 className="relative bg-base-100 px-6 py-2 inline-block">
              About Me
              <div className="absolute -z-20 top-0 -right-[50%] bg-base-100 w-full h-full transform -rotate-45"></div>
            </h2>
          </div>

          <div className="bg-neutral z-50 w-full h-full rounded-tl-xl rounded-bl-xl rounded-br-xl px-4 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-mono font-semibold mb-2">
              Juanka Valero
            </h2>
            <span className="text-center font-sans text-xl font-bold mb-4">
              👨‍💻 Desarrollador Web 🇦🇷
            </span>

            <div className="flex flex-col gap-2">
              <p className="text-center text-sm">
                ¡Hola! Soy un desarrollador web de 24 años, originario de Jujuy,
                Argentina. 🇦🇷
              </p>
              <p className="text-center text-sm">
                Tengo un profundo conocimiento en front-end y back-end. 💻🔧
              </p>
              <p className="text-center text-sm">
                Mi objetivo es crear experiencias web útiles y atractivas. 🌐🎨
              </p>
              <p className="text-center text-sm">
                Mi portafolio refleja mi pasión por la programación y mi
                compromiso con la creación de soluciones web efectivas. 🖥️📱
              </p>
            </div>
          </div>
        </div>

        <div className="col-start-6 col-end-13 row-start-1 row-end-2 h-full rounded-xl p-1 flex justify-start items-center">
          <h2
            className="text-6xl font-mono font-bold"
            style={{ letterSpacing: "12px" }}
          >
            Portfolio
          </h2>
        </div>

        <div className="bg-zinc-500 col-start-6 col-end-11 row-start-2 row-end-5 h-full rounded-xl">
          <h2>Slider</h2>
        </div>

        <div className="col-start-11 col-end-13 row-start-2 row-end-5 h-full rounded-xl flex flex-col gap-6">
          <div className="h-full bg-secondary rounded-xl flex justify-center items-center">
            <h2 className="text-center text-2xl font-bold text-secondary-content">
              Skills
            </h2>
          </div>
          <div className="h-full bg-warning rounded-xl flex justify-center items-center">
            <h2 className="text-center text-2xl font-bold text-secondary-content">
              Projects
            </h2>
          </div>
        </div>

        <div className="bg-accent h-full col-start-6 col-end-10 row-start-5 row-end-7  rounded-xl">
          <div className="h-full px-4 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold text-accent-content">
              Services
            </h2>
            <p className="text-center text-sm text-accent-content">
              Discover both frontend and backend services I offer by clicking
              here.
            </p>
          </div>
        </div>

        <div className="bg-primary col-start-10 col-end-13 row-start-5 row-end-7  h-full rounded-xl">
          <div className="h-full px-4 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold text-primary-content">
              Contact
            </h2>
            <p className="text-center text-sm text-primary-content">
              If you're interested in my services, want to discuss a potential
              project, or job. Contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

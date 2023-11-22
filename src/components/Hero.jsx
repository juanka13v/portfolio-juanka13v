import FlipCard from "@components/FlipCard";

const Hero = () => {
  return (
    <div className="hero lg:max-h-[1440px * 0.90] py-4 md:py-14">
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" flex-1  flex flex-col">
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

        <div className="flex-1 grid grid-cols-6 grid-rows-6 gap-4">
          <div className="col-start-1 col-end-7 row-start-1 row-end-2  rounded-xl p-1 flex justify-start items-center">
            <h2
              className="text-6xl font-mono font-bold"
              style={{ letterSpacing: "12px" }}
            >
              Portfolio
            </h2>
          </div>

          <div className="col-start-1 col-end-5 row-start-2 row-end-5 bg-zinc-500  rounded-xl">
            <h2>Slider</h2>
          </div>

          <div className=" col-start-5 col-end-7 row-start-2 row-end-5 rounded-xl flex flex-col gap-6">
            <FlipCard
              className=""
              front="bg-secondary rounded-xl text-secondary-content"
              back="bg-secondary rounded-xl text-secondary-content"
              title="Projects"
              description="See my projects."
              path="#projects"
            />

            <FlipCard
              className=""
              front="bg-warning rounded-xl text-warning-content"
              back="bg-warning rounded-xl text-warning-content"
              title="Skills"
              description="See my skills in front-end and back-end"
              path="#skills"
            />
          </div>

          <FlipCard
            className="col-start-1 col-end-4 row-start-5 row-end-7"
            front="bg-accent rounded-xl text-accent-content"
            back="bg-accent rounded-xl text-accent-content"
            title="Services"
            description="Discover both frontend and backend services I offer by clicking
            here."
            path="#services"
          />

          <FlipCard
            className="col-start-4 col-end-7 row-start-5 row-end-7"
            front="bg-primary rounded-xl text-primary-content"
            back="bg-primary rounded-xl text-primary-content"
            title="Contact"
            path="#contact"
            description="If you're interested in my services, want to discuss a potential
                project, or job. Contact me."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

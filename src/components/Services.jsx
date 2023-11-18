import { DataServices } from "../constants";
import Timeline from "@components/Timeline";

const Services = () => {
  const { frontend, backend } = DataServices;

  return (
    <section id="services" className="flex flex-col p-4 gap-4 items-center border-2 border-neutral-content rounded-2xl">
      <h2 className="text-center text-2xl font-bold">Services</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-3xl">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Frontend</h2>
          {<Timeline content={frontend} />}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Backend</h2>
          {<Timeline content={backend} />}
        </div>
      </div>
    </section>
  );
};

export default Services;

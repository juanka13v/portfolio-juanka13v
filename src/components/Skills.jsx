import { DataSkills } from "../constants";
import ItemSkill from "@components/ItemSkill";

const Skills = () => {
  const { frontend, backend } = DataSkills;

  return (
    <section className="flex flex-col gap-4" id="skills">
      <h2 className="text-center text-2xl font-bold" >Skills</h2>

      <div className="flex flex-col flex-grow md:flex-row w-full">
        <div className="flex flex-col bg-base-300 rounded-box place-items-center p-4">
          <h2 className="text-center text-xl font-semibold mb-4">Front-end</h2>

          <div className="flex flex-wrap gap-4 place-content-center">
            {frontend.map((item) => (
              <ItemSkill title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
        <div className="divider divider-vertical md:divider-horizontal">OR</div>
        <div className="flex flex-col flex-grow  bg-base-300 rounded-box p-4">
          <h2 className="text-center text-xl font-semibold mb-4">Back-end</h2>

          <div className="flex flex-wrap gap-4 place-content-center">
            {backend.map((item) => (
              <ItemSkill title={item.title} icon={item.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

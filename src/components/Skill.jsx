import { Skills } from "../constant/data";

const Skill = () => {
  return (
    <div id="SKILLS" className="mb-10 md:mb-40">
      <div className="flex flex-wrap justify-between gap-2 md:gap-6">
        {Skills.map((i) => {
          return (
            <div key={i.id} className="w-[100px] md:w-[130px] flex flex-col md:flex-row gap-2 items-center mb-10">
              <img className="w-10" src={i.image} alt="" />
              <p className="text-green_text dark:text-green_text">{i.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

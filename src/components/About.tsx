import * as React from "react";
import { Pokemon } from "../types/data.model";

interface IAboutProps {
  pokeData: Pokemon | undefined;
}

const About: React.FunctionComponent<IAboutProps> = ({ pokeData }) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="mr-5 text-slate-700 font-medium">
          <h4 className=" ">Species</h4>
          <h4 className="">Height</h4>
          <h4 className="">Weight</h4>
          <h4 className="">Abilities</h4>
          <h3 className="py-2 text-lg text-black font-semibold"> Breeding</h3>
        </div>
        <div className="ml-5 font-bold text-normal">
          <p>{pokeData?.species.name}</p>
          <p>{pokeData?.height}</p>
          <p>{pokeData?.weight}</p>
          <p>
            {pokeData?.abilities.map((ability, i) => (
              <span key={ability.ability.name}>
                {ability.ability.name}
                {pokeData?.abilities.length - 1 !== i && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="flex justify-center"></div>
    </div>
  );
};

export default About;

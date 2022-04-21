import * as React from "react";
import { Pokemon, Species } from "../types/data.model";

interface IAboutProps {
  pokeData: Pokemon | undefined;
  speciesDetails: Species | undefined;
}

const About: React.FunctionComponent<IAboutProps> = ({
  pokeData,
  speciesDetails,
}) => {
  return (
    <div>
      <div className="flex justify-center ml-2">
        <div className="mr-5 text-slate-700 font-medium ">
          <h4>Species</h4>
          <h4>Height</h4>
          <h4>Weight</h4>
          <h4>Abilities</h4>
          <h4>Held items</h4>
          <h4>Habitat</h4>
          <h4>Egg groups</h4>
          {/* <h3 className="py-2 text-lg text-black font-semibold mt-2">
            Description
          </h3> */}
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
          <p>
            {pokeData?.held_items && pokeData?.held_items?.length <= 0 ? (
              <span>nothing</span>
            ) : (
              pokeData?.held_items?.map((item, i) => (
                <span key={item.item.name}>
                  {item.item.name}
                  {pokeData?.held_items.length - 1 !== i && ", "}
                </span>
              ))
            )}
          </p>
          <p>{speciesDetails?.habitat.name}</p>
          <p>
            {speciesDetails?.egg_groups.map((egg, i) => (
              <span key={egg.name}>
                {egg.name}
                {speciesDetails?.egg_groups.length - 1 !== i && ", "}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col items-center">
        <p className=" text-slate-700 font-sm mb-5 mx-2 sm:mx-11">
          {speciesDetails?.flavor_text_entries[0].flavor_text}
        </p>
      </div> */}
    </div>
  );
};

export default About;

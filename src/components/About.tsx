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
    <div className="mb-2">
      <div className="flex justify-center ml-10 mr-2">
        <div className="grid grid-cols-2 gap-x-4 ">
          <h4 className="text-slate-700 font-medium ">Species</h4>
          <p className="font-bold text-normal">{pokeData?.species.name}</p>
          <h4 className=" text-slate-700 font-medium ">Height</h4>
          <p className="font-bold text-normal">{pokeData?.height}</p>
          <h4 className="text-slate-700 font-medium ">Weight</h4>
          <p className="font-bold text-normal">{pokeData?.weight}</p>
          <h4 className="text-slate-700 font-medium ">Abilities</h4>
          <p className="font-bold text-normal">
            {pokeData?.abilities &&
              pokeData?.abilities.map((ability, i) => (
                <span key={ability.ability.name}>
                  {ability.ability.name}
                  {pokeData?.abilities.length - 1 !== i && ", "}
                </span>
              ))}
          </p>
          <h4 className="text-slate-700 font-medium ">Held items</h4>
          <p className="font-bold text-normal">
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
          <h4 className="text-slate-700 font-medium ">Habitat</h4>
          <p className="font-bold text-normal">
            {speciesDetails?.habitat
              ? speciesDetails?.habitat.name
              : "not communicated"}
          </p>
          <h4 className="text-slate-700 font-medium ">Egg groups</h4>
          <p className="font-bold text-normal">
            {speciesDetails?.egg_groups &&
              speciesDetails?.egg_groups.map((egg, i) => (
                <span key={egg.name}>
                  {egg.name}
                  {speciesDetails?.egg_groups.length - 1 !== i && ", "}
                </span>
              ))}
          </p>
          <h4 className="text-slate-700 font-medium ">Base happiness</h4>
          <p className="font-bold text-normal">
            {speciesDetails?.base_happiness && speciesDetails?.base_happiness}
          </p>
          <h4 className="text-slate-700 font-medium ">Shape</h4>
          <p className="font-bold text-normal">
            {speciesDetails?.shape && speciesDetails?.shape.name}
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

import * as React from "react";
import { Pokemon, Species } from "../types/data.model";
import "../App.css";
interface IAboutProps {
  pokeData: Pokemon | undefined;
  speciesDetails: Species | undefined;
}

interface LayoutProps {
  children: React.ReactNode;
}

const About: React.FunctionComponent<IAboutProps> = ({
  pokeData,
  speciesDetails,
}) => {
  // subComponents
  const Title = ({ children }: LayoutProps) => {
    return <h4 className="text-slate-700 font-medium ">{children}</h4>;
  };
  const Text = ({ children }: LayoutProps) => {
    return <p className="font-bold text-normal">{children}</p>;
  };
  return (
    <div className="mb-2 md:mb-4">
      <div className="flex justify-center ml-8 mr-2">
        <div className="grid-col gap-x-4 lg:gap-x-6  ">
          <Title>Species</Title>
          <Text>{pokeData?.species.name}</Text>

          <Title>Height</Title>
          <Text>{pokeData?.height}</Text>
          <Title>Weight</Title>
          <Text>{pokeData?.weight}</Text>
          <Title>Abilities</Title>
          <Text>
            {pokeData?.abilities &&
              pokeData?.abilities.map((ability, i) => (
                <span key={ability.ability.name}>
                  {ability.ability.name}
                  {pokeData?.abilities.length - 1 !== i && ", "}
                </span>
              ))}
          </Text>
          <Title>Held items</Title>
          <Text>
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
          </Text>
          <Title>Habitat</Title>
          <Text>
            {speciesDetails?.habitat
              ? speciesDetails?.habitat.name
              : "not communicated"}
          </Text>
          <Title>Egg groups</Title>
          <Text>
            {speciesDetails?.egg_groups &&
              speciesDetails?.egg_groups.map((egg, i) => (
                <span key={egg.name}>
                  {egg.name}
                  {speciesDetails?.egg_groups.length - 1 !== i && ", "}
                </span>
              ))}
          </Text>
          <Title>Base happiness</Title>
          <Text>
            {speciesDetails?.base_happiness && speciesDetails?.base_happiness}
          </Text>
          <Title>Shape</Title>
          <Text>{speciesDetails?.shape && speciesDetails?.shape.name}</Text>
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

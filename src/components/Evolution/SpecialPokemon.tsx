import * as React from "react";
import ImgEvolution from "../../subComponents/ImgEvolution";
import { Evolution_chain, Pokemon } from "../../types/data.model";

interface ISpecialPokemonProps {
  specialPoke: Pokemon | undefined;
  evol: Evolution_chain | undefined;
  poke2: Pokemon | undefined;
  specialPokemon: (string | undefined)[] | undefined;
  specialPokes: Pokemon[];
}

const SpecialPokemon: React.FunctionComponent<ISpecialPokemonProps> = ({
  specialPoke,
  evol,
  poke2,
  specialPokemon,
  specialPokes,
}) => {
  return (
    <>
      {specialPokemon && specialPokemon.length <= 1 ? (
        <>
          <div className="flex flex-col items-center">
            {poke2?.sprites.other.dream_world.front_default !== null ? (
              <ImgEvolution
                PokemonImage={poke2?.sprites.other.dream_world.front_default}
              />
            ) : poke2.sprites.other.home !== null ? (
              <ImgEvolution
                PokemonImage={poke2?.sprites.other.home.front_default}
              />
            ) : (
              <ImgEvolution PokemonImage={poke2?.sprites.front_default} />
            )}
            <p className="text-base font-semibold">
              {evol?.evolves_to?.[0].species?.name}
            </p>
          </div>
          <div>
            <p className="text-base font-bold">lvl-</p>
          </div>
          <div className="flex flex-col items-center">
            {specialPoke?.sprites.other.dream_world.front_default !== null ? (
              <ImgEvolution
                PokemonImage={
                  specialPoke?.sprites.other.dream_world.front_default
                }
              />
            ) : specialPoke?.sprites.other.home.front_default !== null ? (
              <ImgEvolution
                PokemonImage={specialPoke?.sprites.other.home.front_default}
              />
            ) : (
              <ImgEvolution PokemonImage={specialPoke?.sprites.front_default} />
            )}
            <p className="text-base font-semibold">
              {specialPoke?.name && specialPoke.name}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            {poke2?.sprites.other.dream_world.front_default !== null ? (
              <ImgEvolution
                PokemonImage={poke2?.sprites.other.dream_world.front_default}
              />
            ) : poke2.sprites.other.home.front_default !== null ? (
              <ImgEvolution
                PokemonImage={poke2?.sprites.other.home.front_default}
              />
            ) : (
              <ImgEvolution PokemonImage={poke2?.sprites.front_default} />
            )}
            <p className="text-base font-semibold">
              {evol?.evolves_to?.[0].species?.name}
            </p>
          </div>
          <div>
            <p className="text-base font-bold">
              lvl-
              {evol?.evolves_to?.[1] &&
                evol?.evolves_to?.[1].evolution_details?.[0].min_level}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base font-semibold">
              {evol?.evolves_to?.[1] && evol?.evolves_to?.[1].species?.name}
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default SpecialPokemon;

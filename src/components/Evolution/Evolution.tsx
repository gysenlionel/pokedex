import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getEvol } from "../../hooks/getEvol";
import { getPokeForDetails } from "../../hooks/getPokeForDetails";
import { getSpecialPokemons } from "../../hooks/getSpecialPokemons";
import ImgEvolution from "../../subComponents/ImgEvolution";
import { Evolution_chain, Pokemon, Species } from "../../types/data.model";
import SpecialPokemon from "./SpecialPokemon";

interface IEvolutionProps {
  speciesDetails: Species | undefined;
  fetchEvol: boolean;
}

const Evolution: React.FunctionComponent<IEvolutionProps> = ({
  speciesDetails,
  fetchEvol,
}) => {
  const [evol, setEvol] = useState<Evolution_chain>();
  const [poke1, setPokemon1] = useState<Pokemon>();
  const [poke2, setPokemon2] = useState<Pokemon>();
  const [poke3, setPokemon3] = useState<Pokemon>();
  const [specialPoke, setSpecialPoke] = useState<Pokemon>();
  const [specialPokes, setSpecialPokes] = useState<Pokemon[]>([]);
  const [fetchPoke, setFetchPoke] = useState(false);
  const urlEvol = speciesDetails?.evolution_chain.url ?? "";

  useEffect(() => {
    setFetchPoke(false);
    if (fetchEvol) getEvol(urlEvol, setEvol, setFetchPoke);
  }, [urlEvol, fetchEvol]);

  // console.log(evol);
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  const pokemon1 = evol?.species.name;
  const pokemon2 =
    evol?.evolves_to?.length! >= 1
      ? evol?.evolves_to?.[0].species?.name
      : undefined;

  const pokemon3 =
    evol?.evolves_to?.length! >= 1
      ? evol?.evolves_to?.[0].evolves_to?.[0] &&
        evol?.evolves_to?.[0].evolves_to?.[0].species?.name
      : undefined;

  const specialPokemon =
    evol?.evolves_to?.length! > 1
      ? evol?.evolves_to!.map((pokemon) => pokemon.species?.name).slice(1)
      : undefined;

  const pokemonUrl = `${baseUrl}${pokemon1}`;
  const pokemonUrl2 = `${baseUrl}${pokemon2}`;
  const pokemonUrl3 = `${baseUrl}${pokemon3}`;
  useEffect(() => {
    if (fetchPoke) {
      getPokeForDetails(pokemonUrl, setPokemon1);
      if (pokemon2) getPokeForDetails(pokemonUrl2, setPokemon2);
      if (pokemon3) getPokeForDetails(pokemonUrl3, setPokemon3);
      if (specialPokemon) {
        if (specialPokemon?.length === 1) {
          let specialPokemonUrl = `${baseUrl}${specialPokemon[0]}`;
          getPokeForDetails(specialPokemonUrl, setSpecialPoke);
        } else if (specialPokemon?.length > 1) {
          getSpecialPokemons(specialPokemon, baseUrl, setSpecialPokes);
        }
      }
    }
  }, [pokemonUrl, fetchPoke, pokemonUrl2, pokemonUrl3, pokemon2, pokemon3]);

  console.log(specialPokes);
  return (
    <div className="mb-2">
      <h2 className="font-bold text-lg text-center mb-4">Evolution Chain</h2>
      {pokemon2 ? (
        <div>
          <div className="flex justify-evenly items-center">
            <div className="flex flex-col items-center">
              {poke1?.sprites.other.dream_world.front_default !== null ? (
                <ImgEvolution
                  PokemonImage={poke1?.sprites.other.dream_world.front_default}
                />
              ) : poke1?.sprites.other.home.front_default !== null ? (
                <ImgEvolution
                  PokemonImage={poke1?.sprites.other.home.front_default}
                />
              ) : (
                <ImgEvolution PokemonImage={poke1?.sprites.front_default} />
              )}
              <p className="text-base font-semibold">{evol?.species.name}</p>
            </div>
            <div>
              <p className="text-base font-bold">
                lvl-{evol?.evolves_to?.[0].evolution_details?.[0].min_level}
              </p>
            </div>
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
          </div>
          {/* EVOLUTION 2 */}
          {evol?.evolves_to?.[0].evolves_to?.[0] && (
            <div className="flex justify-evenly items-center mt-8">
              <div className="flex flex-col items-center">
                {poke2?.sprites.other.dream_world.front_default !== null ? (
                  <ImgEvolution
                    PokemonImage={
                      poke2?.sprites.other.dream_world.front_default
                    }
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
                <p className="text-base font-bold">
                  lvl-
                  {evol?.evolves_to?.[0].evolves_to?.[0] &&
                    evol?.evolves_to?.[0].evolves_to?.[0].evolution_details?.[0]
                      .min_level}
                </p>
              </div>
              <div className="flex flex-col items-center">
                {poke3?.sprites.other.dream_world.front_default !== null ? (
                  <ImgEvolution
                    PokemonImage={
                      poke3?.sprites.other.dream_world.front_default
                    }
                  />
                ) : poke3?.sprites.other.home.front_default !== null ? (
                  <ImgEvolution
                    PokemonImage={poke3?.sprites.other.home.front_default}
                  />
                ) : (
                  <ImgEvolution PokemonImage={poke3?.sprites.front_default} />
                )}
                <p className="text-base font-semibold">
                  {evol?.evolves_to?.[0].evolves_to?.[0] &&
                    evol?.evolves_to?.[0].evolves_to?.[0].species?.name}
                </p>
              </div>
            </div>
          )}
          <div className="flex justify-evenly items-center mt-8">
            {specialPokemon && (
              <SpecialPokemon
                specialPoke={specialPoke}
                evol={evol}
                poke2={poke2}
                specialPokemon={specialPokemon}
                specialPokes={specialPokes}
              />
            )}
          </div>
        </div>
      ) : (
        <h4 className="text-base font-semibold text-center">
          No evolution for this Pokemon
        </h4>
      )}
    </div>
  );
};

export default Evolution;

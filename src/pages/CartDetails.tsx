import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/data.model";
import { getPokemon } from "../hooks/getPokemon";
import pkball from "../assets/images/pokeball.png";
import Tabs from "../components/Tabs";

interface ICartDetailsProps {}

const CartDetails: React.FunctionComponent<ICartDetailsProps> = (props) => {
  const [pokeData, setPokeData] = useState<Pokemon>();
  let { pokemon } = useParams();

  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  useEffect(() => {
    getPokemon(baseUrl, setPokeData);
  }, [baseUrl]);
  console.log(pokeData);

  return (
    <main className="flex justify-center items-center h-[90vh] bg-neutral-50">
      <div
        className={` ${
          pokeData?.types[0].type.name === "electric"
            ? "bg-[#F8D030FF]"
            : pokeData?.types[0].type.name === "normal"
            ? "bg-[#75515BFF]"
            : pokeData?.types[0].type.name === "fire"
            ? "bg-[#AA1F23]"
            : pokeData?.types[0].type.name === "water"
            ? "bg-[#6890F0]"
            : pokeData?.types[0].type.name === "grass"
            ? "bg-[#27CB4FFF]"
            : pokeData?.types[0].type.name === "ice"
            ? "bg-[#98D8D8]"
            : pokeData?.types[0].type.name === "fighting"
            ? "bg-[#C03028]"
            : pokeData?.types[0].type.name === "poison"
            ? "bg-[#A040A0]"
            : pokeData?.types[0].type.name === "ground"
            ? "bg-[#E0C068]"
            : pokeData?.types[0].type.name === "flying"
            ? "bg-[#A890F0]"
            : pokeData?.types[0].type.name === "psychic"
            ? "bg-[#F85888]"
            : pokeData?.types[0].type.name === "bug"
            ? "bg-[#3B9950FF]"
            : pokeData?.types[0].type.name === "rock"
            ? "bg-[#B8A038]"
            : pokeData?.types[0].type.name === "ghost"
            ? "bg-[#705898]"
            : pokeData?.types[0].type.name === "dark"
            ? "bg-[#5A5979FF]"
            : pokeData?.types[0].type.name === "dragon"
            ? "bg-[#61CAD9FF]"
            : pokeData?.types[0].type.name === "steel"
            ? "bg-[#F0B6BC]"
            : pokeData?.types[0].type.name === "fairy"
            ? "bg-[#F0B6BC]"
            : "bg-[#fff]"
        } w-[100vw]  h-[87vh] mt-[3vh] rounded-t-lg`}
      >
        <img
          src={pkball}
          alt="pokeball"
          className="w-96 h-96 absolute top-48 right-5  opacity-20 z-10"
        />
        <div className="flex justify-around items-center">
          <div>
            <h1 className="text-white font-extrabold text-3xl  mt-14">
              {pokeData?.name}
            </h1>
            <div className="mt-4 ">
              <span
                className="bg-gray-200/40  rounded-full px-3 py-1 font-base
                  mb-2 text-white font-bold inline-block align-middle "
              >
                {pokeData?.types[0].type.name}
              </span>
              {pokeData?.types[1] && pokeData?.types?.length > 1 ? (
                <span
                  className="bg-gray-200/40  rounded-full px-3 py-1 font-base
                  mb-2 ml-2 text-white font-bold inline-block align-middle"
                >
                  {pokeData?.types[1]?.type?.name}
                </span>
              ) : null}
            </div>
          </div>
          <p className="text-white font-bold text-xl mt-14 ">
            level-{pokeData?.base_experience}
          </p>
        </div>
        <div>
          <img
            className="object-contain h-56 w-full"
            src={pokeData?.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
        </div>
        <div className="bg-slate-100 rounded-t-lg ">
          <div>
            <Tabs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartDetails;

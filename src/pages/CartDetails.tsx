import * as React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/data.model";
import { getPokemon } from "../hooks/getPokemon";
import pkball from "../assets/images/pokeball.png";
import Tabs from "../components/Tabs";
import styled from "styled-components";
import tw from "twin.macro";
import { bgColor } from "../utils/bgColor";

interface ICartDetailsProps {}

interface InputProps {
  typeName: string | undefined;
}

const BackgroundCol = styled.div<InputProps>`
  background-color: ${(props) => bgColor(props.typeName)};
  ${tw`
   h-80 rounded-t-lg
  `}
`;

const CartDetails: React.FunctionComponent<ICartDetailsProps> = (props) => {
  const [pokeData, setPokeData] = useState<Pokemon>();
  let { pokemon } = useParams();

  // fetch
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  useEffect(() => {
    getPokemon(baseUrl, setPokeData);
  }, [baseUrl]);

  console.log(pokeData);

  return (
    <main
      className={`flex justify-center items-center 
        mx-0 md:mx-20 `}
    >
      <div className="bg-slate-100 w-[100vw] md:min-h-[97vh] md:mt-[3vh] min-h-screen mt-0 ">
        <BackgroundCol typeName={pokeData?.types[0].type.name}>
          <div className="flex justify-center relative">
            <img
              src={pkball}
              alt="pokeball"
              className="w-72 h-72 absolute top-32 opacity-20 z-10"
            />
          </div>
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
          <div className="flex justify-center">
            <img
              className="object-contain h-48 w-48 absolute z-10"
              src={pokeData?.sprites.other.dream_world.front_default}
              alt="pokemon"
            />
          </div>
        </BackgroundCol>
        <div className="bg-slate-100 rounded-t-lg relative bottom-1">
          <div className="pt-2">
            <Tabs pokeData={pokeData} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartDetails;

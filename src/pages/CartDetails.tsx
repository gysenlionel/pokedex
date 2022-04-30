import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pokemon } from "../types/data.model";
import { getPokemon } from "../hooks/getPokemon";
import pkball from "../assets/images/pokeball.png";
import Tabs from "../components/Tabs";
import styled from "styled-components";
import tw from "twin.macro";
import { bgColor } from "../utils/bgColor";
import { motion } from "framer-motion";

interface ICartDetailsProps {}

interface InputProps {
  typeName: string | undefined;
}

const BackgroundCol = styled.div<InputProps>`
  background-color: ${(props) => bgColor(props.typeName)};
  ${tw`
   h-80 rounded-none md:rounded-t-lg 
  `}
`;

// framer
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",

    transition: { ease: "easeInOut", duration: 0.5, delay: 0.2 },
  },
};

export const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { type: "spring", duration: 1.5, delay: 0.8 },
  },
};

const topVariants = {
  initial: {
    y: -200,
    transition: { type: "spring", duration: 1.5, delay: 1 },
  },
  animate: {
    y: 0,
    transition: { type: "spring", duration: 1.5, delay: 1 },
  },
};

const CartDetails: React.FunctionComponent<ICartDetailsProps> = (props) => {
  const [pokeData, setPokeData] = useState<Pokemon>();
  const [fetchSpeciesDetails, setFecthSpecDetails] = useState(false);
  let { pokemon } = useParams();

  // fetch
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  useEffect(() => {
    setFecthSpecDetails(false);
    getPokemon(baseUrl, setPokeData, setFecthSpecDetails);
  }, [baseUrl]);

  // console.log(pokeData);

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
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
          <motion.div
            variants={topVariants}
            initial="initial"
            animate="animate"
            className="flex justify-around items-center"
          >
            <div>
              <Link to="/">
                <svg
                  className="w-6 h-6 mt-6 absolute text-white cursor-pointer"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </Link>
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
              Exp-{pokeData?.base_experience}
            </p>
          </motion.div>
          <div className="flex justify-center">
            {pokeData?.sprites.other.dream_world.front_default !== null ? (
              <motion.img
                variants={imgVariants}
                initial="initial"
                animate="animate"
                className="object-contain h-48 w-48 absolute z-10"
                src={pokeData?.sprites.other.dream_world.front_default}
                alt="pokemon"
              />
            ) : pokeData?.sprites.other.home.front_default !== null ? (
              <img
                className="object-contain h-48 w-48 absolute z-10"
                src={pokeData?.sprites.other.home.front_default}
                alt="Pokemon"
              />
            ) : (
              <img
                src={pokeData.sprites.front_default}
                alt="Pokemon"
                className="object-contain h-48 w-48 absolute z-10"
              />
            )}
          </div>
        </BackgroundCol>
        <div className="bg-slate-100 rounded-t-lg relative bottom-1">
          <div className="pt-2">
            <Tabs
              pokeData={pokeData}
              fetchSpeciesDetails={fetchSpeciesDetails}
            />
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default CartDetails;

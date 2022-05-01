import * as React from "react";
import { Pokemon } from "../types/data.model";
import pkball from "../assets/images/pokeball.png";
import pkballCol from "../assets/images/pokeball-color.png";
import { Link } from "react-router-dom";
import { badgeType } from "../utils/badgeType";
import { type } from "../utils/bgColortypeObject";
import { motion } from "framer-motion";

interface ICartProps {
  pokemon: Pokemon;
}
// framer
const cartImgVariants = {
  // hidden: { opacity: 0 },
  // visible: {
  //   opacity: 1,
  //   transition: { type: "spring", duration: 1, delay: 0.2 },
  // },
  exit: {
    opacity: 0,
    transition: { type: "spring", duration: 1, delay: 0.5 },
  },
};

const Cart: React.FunctionComponent<ICartProps> = ({ pokemon }) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);
  // check Type object compared to pokemon type api and recovers background color
  const pokemonType = type[pokemon.types[0].type.name];

  return (
    <div className="">
      <Link to={`${pokemon.name}`}>
        <div
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
          className={`relative cursor-pointer transition duration-200 
        ease-in transform sm:hover:scale-105 ${pokemonType} rounded overflow-hidden
            shadow-lg shadow-gray-300 max-w-sm `}
        >
          <img
            src={isShown ? pkballCol : pkball}
            alt="pokeball"
            className={`${
              isShown
                ? "w-48 h-48 absolute  top-5 transition duration-200 ease-in transform opacity-60 "
                : "w-48 h-48 absolute top-5  opacity-20 "
            }`}
          />
          {pokemon.sprites.other.dream_world.front_default !== null ? (
            <motion.img
              variants={cartImgVariants}
              // initial="hidden"
              // animate="visible"
              exit="exit"
              src={pokemon.sprites.other.dream_world.front_default}
              alt="pokemon"
              className="relative object-contain h-56 w-full pt-2 px-2 pl-20"
            />
          ) : pokemon.sprites.other.home.front_default !== null ? (
            <motion.img
              variants={cartImgVariants}
              // initial="hidden"
              // animate="visible"
              exit="exit"
              src={pokemon.sprites.other.home.front_default}
              alt="pokemon"
              className="relative object-contain h-56 w-full pt-2 px-2 pl-20"
            />
          ) : (
            <motion.img
              variants={cartImgVariants}
              // initial="hidden"
              // animate="visible"
              exit="exit"
              src={pokemon.sprites.front_default}
              alt="pokemon"
              className="relative object-contain h-56 w-full pt-2 px-2 pl-20"
            />
          )}
          <div className="absolute w-10 h-10 bottom-2 right-4 text-center mr-1">
            <img src={`${badgeType(pokemon.types[0].type.name)}`} alt="types" />
            <p className="absolute w-10 h-9 bottom-8 text-white font-normal">
              {pokemon.types[0].type.name}
            </p>
          </div>
          <div className="absolute w-10 h-10 bottom-20 right-4 text-center mr-1">
            {pokemon.types.length > 1 ? (
              <img
                src={`${badgeType(pokemon?.types[1]?.type?.name)}`}
                alt="types"
              />
            ) : null}
            <p className="absolute w-10 h-9 bottom-8 text-white font-normal">
              {typeof pokemon?.types ? pokemon?.types[1]?.type?.name : ""}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <h1 className="font-bold text-xl mb-2 text-white ">
              {pokemon.name}
            </h1>
          </div>
          <div className="flex flex-col ml-2 pl-3">
            <div className="flex items-center">
              <span
                className="bg-gray-200 rounded-full px-3 py-1 font-base
            mb-2"
              >
                Weight:
              </span>
              <p className="text-gray-200 px-3 font-medium">{pokemon.weight}</p>
            </div>
            <span className="rotate-90 w-5  border  absolute bottom-11 left-12" />
            <div className="flex items-center ">
              <span
                className="bg-gray-200 rounded-full px-3 py-1 font-base
            mb-2"
              >
                Height:
              </span>
              <p className="text-gray-200 px-3 font-medium">{pokemon.height}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cart;

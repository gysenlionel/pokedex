import * as React from "react";
import { Pokemon } from "../types/data.model";
import pkball from "../assets/images/pokeball.png";
import pkballCol from "../assets/images/pokeball-color.png";
// import Loader from "../components/Loader";
// import CartDetails from "../pages/CartDetails";
import { Link } from "react-router-dom";

interface ICartProps {
  pokemon: Pokemon;
}

const Cart: React.FunctionComponent<ICartProps> = ({ pokemon }) => {
  const [isShown, setIsShown] = React.useState<boolean>(false);

  return (
    <div>
      <Link to={`${pokemon.name}`}>
        <div
          onMouseOver={() => setIsShown(true)}
          onMouseOut={() => setIsShown(false)}
          className={`relative cursor-pointer transition duration-200
        ease-in transform sm:hover:scale-105 hover:z-50 ${
          pokemon.types[0].type.name === "electric"
            ? "bg-[#F8D030FF]"
            : pokemon.types[0].type.name === "normal"
            ? "bg-[#75515BFF]"
            : pokemon.types[0].type.name === "fire"
            ? "bg-[#AA1F23]"
            : pokemon.types[0].type.name === "water"
            ? "bg-[#6890F0]"
            : pokemon.types[0].type.name === "grass"
            ? "bg-[#27CB4FFF]"
            : pokemon.types[0].type.name === "ice"
            ? "bg-[#98D8D8]"
            : pokemon.types[0].type.name === "fighting"
            ? "bg-[#C03028]"
            : pokemon.types[0].type.name === "poison"
            ? "bg-[#A040A0]"
            : pokemon.types[0].type.name === "ground"
            ? "bg-[#E0C068]"
            : pokemon.types[0].type.name === "flying"
            ? "bg-[#A890F0]"
            : pokemon.types[0].type.name === "psychic"
            ? "bg-[#F85888]"
            : pokemon.types[0].type.name === "bug"
            ? "bg-[#3B9950FF]"
            : pokemon.types[0].type.name === "rock"
            ? "bg-[#B8A038]"
            : pokemon.types[0].type.name === "ghost"
            ? "bg-[#705898]"
            : pokemon.types[0].type.name === "dark"
            ? "bg-[#5A5979FF]"
            : pokemon.types[0].type.name === "dragon"
            ? "bg-[#61CAD9FF]"
            : pokemon.types[0].type.name === "steel"
            ? "bg-[#F0B6BC]"
            : pokemon.types[0].type.name === "fairy"
            ? "bg-[#F0B6BC]"
            : "bg-[#fff]"
        } rounded overflow-hidden
            shadow-lg shadow-gray-300 max-w-sm relative `}
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
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon"
            className="relative object-contain h-56 w-full pt-2 px-2 pl-20"
          />
          <div className="absolute w-10 h-10 bottom-2 right-4 text-center mr-1">
            <img
              src={
                pokemon.types[0].type.name === "electric"
                  ? "/images/electric.png"
                  : pokemon.types[0].type.name === "normal"
                  ? "/images/normal.png"
                  : pokemon.types[0].type.name === "fire"
                  ? "/images/feu.png"
                  : pokemon.types[0].type.name === "water"
                  ? "/images/water.png"
                  : pokemon.types[0].type.name === "grass"
                  ? "/images/grass.png"
                  : pokemon.types[0].type.name === "ice"
                  ? "/images/ice.png"
                  : pokemon.types[0].type.name === "fighting"
                  ? "/images/fighting.png"
                  : pokemon.types[0].type.name === "poison"
                  ? "/images/poison.png"
                  : pokemon.types[0].type.name === "ground"
                  ? "/images/ground.png"
                  : pokemon.types[0].type.name === "flying"
                  ? "/images/flying.png"
                  : pokemon.types[0].type.name === "psychic"
                  ? "/images/psychic.png"
                  : pokemon.types[0].type.name === "bug"
                  ? "/images/bug.png"
                  : pokemon.types[0].type.name === "rock"
                  ? "/images/rock.png"
                  : pokemon.types[0].type.name === "ghost"
                  ? "/images/ghost.png"
                  : pokemon.types[0].type.name === "dark"
                  ? "/images/dark.png"
                  : pokemon.types[0].type.name === "dragon"
                  ? "/images/dragon.png"
                  : pokemon.types[0].type.name === "steel"
                  ? "/images/steel.png"
                  : pokemon.types[0].type.name === "fairy"
                  ? "/images/fairy.png"
                  : ""
              }
              alt="types"
            />
            <p className="absolute w-10 h-9 bottom-8 text-white font-normal">
              {pokemon.types[0].type.name}
            </p>
          </div>
          <div className="absolute w-10 h-10 bottom-20 right-4 text-center mr-1">
            {pokemon.types.length > 1 ? (
              <img
                src={
                  pokemon?.types[1]?.type?.name === "electric"
                    ? "/images/electric.png"
                    : pokemon?.types[1]?.type?.name === "normal"
                    ? "/images/normal.png"
                    : pokemon?.types[1]?.type?.name === "fire"
                    ? "/images/feu.png"
                    : pokemon?.types[1]?.type?.name === "water"
                    ? "/images/water.png"
                    : pokemon?.types[1]?.type?.name === "grass"
                    ? "/images/grass.png"
                    : pokemon?.types[1]?.type?.name === "ice"
                    ? "/images/ice.png"
                    : pokemon?.types[1]?.type?.name === "fighting"
                    ? "/images/fighting.png"
                    : pokemon?.types[1]?.type?.name === "poison"
                    ? "/images/poison.png"
                    : pokemon?.types[1]?.type?.name === "ground"
                    ? "/images/ground.png"
                    : pokemon?.types[1]?.type?.name === "flying"
                    ? "/images/flying.png"
                    : pokemon?.types[1]?.type?.name === "psychic"
                    ? "/images/psychic.png"
                    : pokemon?.types[1]?.type?.name === "bug"
                    ? "/images/bug.png"
                    : pokemon?.types[1]?.type?.name === "rock"
                    ? "/images/rock.png"
                    : pokemon?.types[1]?.type?.name === "ghost"
                    ? "/images/ghost.png"
                    : pokemon?.types[1]?.type?.name === "dark"
                    ? "/images/dark.png"
                    : pokemon?.types[1]?.type?.name === "dragon"
                    ? "/images/dragon.png"
                    : pokemon?.types[1]?.type?.name === "steel"
                    ? "/images/steel.png"
                    : pokemon?.types[1]?.type?.name === "fairy"
                    ? "/images/fairy.png"
                    : ""
                }
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

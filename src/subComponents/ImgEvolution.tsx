import * as React from "react";
import { motion } from "framer-motion";

interface IImgEvolutionProps {
  PokemonImage: string | undefined;
}

const ImgEvolution: React.FunctionComponent<IImgEvolutionProps> = ({
  PokemonImage,
}) => {
  return (
    <motion.img
      src={PokemonImage}
      alt="pokemon"
      className="w-24 h-24 object-contain"
    />
  );
};

export default ImgEvolution;

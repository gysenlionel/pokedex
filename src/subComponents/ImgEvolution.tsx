import * as React from "react";

interface IImgEvolutionProps {
  PokemonImage: string | undefined;
}

const ImgEvolution: React.FunctionComponent<IImgEvolutionProps> = ({
  PokemonImage,
}) => {
  return (
    <img
      src={PokemonImage}
      alt="pokemon"
      className="w-24 h-24 object-contain"
    />
  );
};

export default ImgEvolution;

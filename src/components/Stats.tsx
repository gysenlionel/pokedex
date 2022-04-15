import * as React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Pokemon } from "../types/data.model";

interface IStatsProps {
  pokeData: Pokemon | undefined;
}

interface Progressbar {
  width: number;
  index: number;
}

const ProgressBar = styled.div<Progressbar>`
  ${tw`
   h-2.5
   rounded-full
  `}
  background-color: ${({ index }) => (index % 2 === 0 ? "#6feb8a" : "#ec585d")};
  width: ${({ width }) => (width > 115 ? 115 : width)}%;
`;

const Stats: React.FunctionComponent<IStatsProps> = ({ pokeData }) => {
  const data: any = pokeData?.stats.map((s) => s.base_stat);

  console.log(data);
  return (
    <div>
      <div className="flex justify-center ">
        <div className="mr-5 text-slate-700 font-medium">
          {pokeData?.stats.map((stat, index) => (
            <h4 key={index}>{stat.stat.name}</h4>
          ))}
        </div>
        <div className="ml-5 font-bold text-normal">
          {pokeData?.stats.map((stat) => (
            <p key={stat.stat.name} className="mr-5">
              {stat.base_stat}
            </p>
          ))}
        </div>
        <div className="ml-5 font-bold text-normal">
          {pokeData?.stats.map((stat, index) => (
            <div
              className="h-6 flex items-center"
              key={`${stat.stat.name}${index}`}
            >
              <div className="w-24 sm:w-36 lg:w-48 bg-gray-300 rounded-full h-2.5 ">
                <ProgressBar width={stat.base_stat} index={index}></ProgressBar>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

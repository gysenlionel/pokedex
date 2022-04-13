import * as React from "react";
import { Pokemon } from "../types/data.model";

interface IStatsProps {
  pokeData: Pokemon | undefined;
}

const Stats: React.FunctionComponent<IStatsProps> = ({ pokeData }) => {
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
              <div className="w-20 sm:w-28 lg:w-48 bg-gray-200 rounded-full h-2.5 ">
                <div
                  className={`${
                    index % 2 === 0 ? "bg-[#6feb8a]" : "bg-[#ec585d]"
                  } h-2.5 rounded-full w-[${stat.base_stat}%]`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

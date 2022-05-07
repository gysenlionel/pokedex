import React, { useContext } from "react";
import EvolContext from "../context/EvolContext";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

interface IChartProps {}

interface IData2 {
  labels: string[];
  datasets: [
    {
      label: string | null;
      data: number[] | null;
      backgroundColor: string | null;
      borderColor: string | null;
      borderWidth: number | null;
    }
  ];
}

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Chart: React.FunctionComponent<IChartProps> = (props) => {
  const { pokemons, specialPokemonsChart } = useContext(EvolContext);

  const data = {
    labels: ["hp", "att", "def", "s-att", "s-def", "speed"],
    datasets: [
      {
        label: pokemons[0]?.name,
        data: pokemons[0]?.stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(170, 31, 35,0.2)",
        borderColor: "rgba(170, 31, 35,1)",
        borderWidth: 2,
      },
      {
        label: pokemons[1]?.name,
        data: pokemons[1]?.stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(45, 85, 197, 0.2)",
        borderColor: "#6b79fa",
        borderWidth: 2,
      },
      {
        label: pokemons[2]?.name,
        data: pokemons[2]?.stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(39, 203, 79,0.2)",
        borderColor: "rgba(39, 203, 79,1)",
        borderWidth: 2,
      },
    ],
  };

  const data2: IData2 = {
    labels: ["hp", "att", "def", "s-att", "s-def", "speed"],
    datasets: [] as any,
  } as IData2;

  const dynamicColors = (opacity: number): string => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},${opacity})`;
  };
  /* eslint-disable */
  specialPokemonsChart?.map((pokemon) => {
    data2.datasets.push({
      label: pokemon.name,
      data: pokemon.stats.map((stat) => stat.base_stat),
      backgroundColor: dynamicColors(0.2),
      borderColor: dynamicColors(1),
      borderWidth: 2,
    });
  });
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-lg text-center mb-4">
        Compares the stats of the different evolutions
      </h2>
      <div className="w-[80vw] h-[50vh] lg:h-[70vh]  mb-4">
        <Radar
          // @ts-ignore
          data={
            specialPokemonsChart && specialPokemonsChart?.length < 1
              ? data
              : data2
          }
          {...props}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  filter: (legendItem) =>
                    typeof legendItem.text !== "undefined",
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Chart;

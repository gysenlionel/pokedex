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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Chart: React.FunctionComponent<IChartProps> = (props) => {
  const { pokemons } = useContext(EvolContext);

  const data = {
    labels: ["hp", "att", "def", "s-att", "s-def", "speed"],
    datasets: [
      {
        label: pokemons[0]?.name,
        data: pokemons[0]?.stats.map((stat) => stat.base_stat),
        backgroundColor: "rgba(255, 99, 133, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
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
        backgroundColor: "rgba(143, 255, 99, 0.2)",
        borderColor: "#6ae252",
        borderWidth: 2,
      },
    ],

    options: {},
  };

  console.log(pokemons);
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-lg text-center mb-4">
        Compares the stats of the different evolutions
      </h2>
      <div className="w-[80vw] h-[50vh] lg:h-[70vh]  mb-4">
        <Radar
          data={data}
          {...props}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  filter: (legendItem, data) =>
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

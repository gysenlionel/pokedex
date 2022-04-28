import React, { useState, useEffect } from "react";
import TabContent from "../subComponents/TabsContent";
import { Pokemon, Species } from "../types/data.model";
import About from "./About";
import Stats from "./Stats";
import { getSpeciesDetails } from "../hooks/getSpeciesDetails";
import Evolution from "./Evolution/Evolution";
import { motion } from "framer-motion";
import Chart from "./Chart";

interface ITabsProps {
  pokeData: Pokemon | undefined;
  fetchSpeciesDetails: Boolean;
}

const pokeballVariants = {
  initial: {
    transform: "scale(0)",
  },
  animate: { scale: [0, 1, 1.3, 1] },
  transition: { type: "spring", duration: 1, delay: 1.4 },
};

const Tabs: React.FunctionComponent<ITabsProps> = ({
  pokeData,
  fetchSpeciesDetails,
}) => {
  const [toggleState, setToggleState] = useState(1);
  const [speciesDetails, setSpeciesDetails] = useState<Species>();
  const [fetchEvol, setFetchEvol] = useState(false);
  // state for framer animation to go in specific tab
  const [selectTabStats, setSelectTabStats] = useState(false);
  // Tabs
  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  // fetch
  const urlSpecies = pokeData?.species.url ?? "";
  useEffect(() => {
    setFetchEvol(false);
    if (fetchSpeciesDetails)
      getSpeciesDetails(urlSpecies, setSpeciesDetails, setFetchEvol);
  }, [urlSpecies, fetchSpeciesDetails]);
  console.log(speciesDetails);

  return (
    <div className="z-0">
      <div className="flex justify-center py-5 ">
        <motion.div
          variants={pokeballVariants}
          initial="initial"
          animate="animate"
          onClick={() => toggleTab(1)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs  bg-center ${
            toggleState === 1 ? "bg-pokecoll" : "bg-pokeball"
          } bg-no-repeat bg-cover  pt-10 sm:mr-10 mr-3 z-20  hover:bg-pokecoll select-none `}
        >
          <h3 className="font-bold">About</h3>
        </motion.div>
        <motion.div
          variants={pokeballVariants}
          initial="initial"
          animate="animate"
          onClick={() => {
            toggleTab(2);
            setSelectTabStats(true);
          }}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs ${
            toggleState === 2 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover pt-10 z-20 hover:bg-pokecoll select-none`}
        >
          <h3 className="font-bold">Stats</h3>
        </motion.div>
        <motion.div
          variants={pokeballVariants}
          initial="initial"
          animate="animate"
          onClick={() => toggleTab(3)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs ${
            toggleState === 3 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover pt-10 z-20 sm:ml-10 ml-3 hover:bg-pokecoll select-none`}
        >
          <h3 className="font-bold">Evol</h3>
        </motion.div>
        <motion.div
          variants={pokeballVariants}
          initial="initial"
          animate="animate"
          onClick={() => toggleTab(4)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs  bg-center ${
            toggleState === 4 ? "bg-pokecoll" : "bg-pokeball"
          } bg-no-repeat bg-cover  pt-10 sm:ml-10 ml-3 z-20  hover:bg-pokecoll select-none `}
        >
          <h3 className="font-bold">Chart</h3>
        </motion.div>
      </div>
      <div>
        <TabContent toggleState={toggleState} tabNumber={1}>
          <About pokeData={pokeData} speciesDetails={speciesDetails} />
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={2}>
          <Stats pokeData={pokeData} selectTabStats={selectTabStats} />
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={3}>
          <Evolution speciesDetails={speciesDetails} fetchEvol={fetchEvol} />
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={4}>
          <Chart />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

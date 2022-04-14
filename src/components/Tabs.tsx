import React, { useState } from "react";
import TabContent from "../subComponents/TabsContent";
import { Pokemon } from "../types/data.model";
import About from "./About";
import Stats from "./Stats";

interface ITabsProps {
  pokeData: Pokemon | undefined;
}

const Tabs: React.FunctionComponent<ITabsProps> = ({ pokeData }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <div className="z-0">
      <div className="flex justify-center py-5 ">
        <div
          onClick={() => toggleTab(1)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs  bg-center ${
            toggleState === 1 ? "bg-pokecoll" : "bg-pokeball"
          } bg-no-repeat bg-cover  pt-10 mr-10 z-20  hover:bg-pokecoll select-none `}
        >
          <h3 className="font-bold">About</h3>
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs ${
            toggleState === 2 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover pt-10 z-20 hover:bg-pokecoll select-none`}
        >
          <h3 className="font-bold">Stats</h3>
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={`rounded-full w-16 h-16 flex justify-center items-center border border-solid border-black cursor-pointer
          text-xs ${
            toggleState === 3 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover pt-10 z-20 ml-10 hover:bg-pokecoll select-none`}
        >
          <h3 className="font-bold">Evol</h3>
        </div>
      </div>
      <div>
        <TabContent toggleState={toggleState} tabNumber={1}>
          <About pokeData={pokeData} />
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={2}>
          <Stats pokeData={pokeData} />
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={3}>
          <p>bonjour3</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

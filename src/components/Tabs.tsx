import React, { useState } from "react";
import TabContent from "../subComponents/TabsContent";

interface ITabsProps {}

const Tabs: React.FunctionComponent<ITabsProps> = (props) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };
  return (
    <div className="z-0">
      <div className="flex justify-center pt-2 ">
        <div
          onClick={() => toggleTab(1)}
          className={`rounded-full w-20 h-20 flex justify-center items-center border border-solid border-black cursor-pointer
          text-sm  bg-center ${
            toggleState === 1 ? "bg-pokecoll" : "bg-pokeball"
          } bg-no-repeat bg-cover  font-bold pt-10 mr-5 z-20  hover:bg-pokecoll select-none `}
        >
          <h3>About</h3>
        </div>
        <div
          onClick={() => toggleTab(2)}
          className={`rounded-full w-20 h-20 flex justify-center items-center border border-solid border-black cursor-pointer
          text-sm ${
            toggleState === 2 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover  font-bold pt-10 z-20 hover:bg-pokecoll select-none`}
        >
          <h3>Stats</h3>
        </div>
        <div
          onClick={() => toggleTab(3)}
          className={`rounded-full w-20 h-20 flex justify-center items-center border border-solid border-black cursor-pointer
          text-sm ${
            toggleState === 3 ? "bg-pokecoll" : "bg-pokeball"
          } bg-center bg-no-repeat bg-cover  font-bold pt-10 z-20 ml-5 hover:bg-pokecoll select-none`}
        >
          <h3>Evolution</h3>
        </div>
      </div>
      <div>
        <TabContent toggleState={toggleState} tabNumber={1}>
          <p>bonjour1</p>
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={2}>
          <p>bonjour2</p>
        </TabContent>
        <TabContent toggleState={toggleState} tabNumber={3}>
          <p>bonjour3</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;

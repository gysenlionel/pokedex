import * as React from "react";
import { SvgComponent } from "../svg/svg";
import pika from "../assets/images/pngegg.png";
interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen ">
      <div className="relative right-6 bottom-8">
        <SvgComponent className="animate-[rotations_3s_linear_infinite]  absolute  top-1/3" />
        <SvgComponent className="animate-[rotations2_3s_linear_infinite] absolute  top-1/3" />
        <SvgComponent className="animate-[rotations3_3s_linear_infinite] absolute top-1/3" />
        <p className="absolute top-4 -right-14 font-medium">Loading...</p>
      </div>

      <img src={pika} alt="pokemon" className="w-32 h-32" />
    </div>
  );
};

export default App;

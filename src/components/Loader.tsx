import * as React from "react";
import { SvgComponent, Pikachu } from "../svg/svg";
interface IAppProps {
  fullScreen?: string | undefined;
}

const App: React.FunctionComponent<IAppProps> = ({ fullScreen }) => {
  return (
    <div
      className={`relative flex flex-col justify-center items-center ${fullScreen} h-screen`}
    >
      <div className="relative right-6 bottom-10 z-10">
        <SvgComponent className="animate-[rotations_3s_linear_infinite]  absolute  top-1/3" />
        <SvgComponent className="animate-[rotations2_3s_linear_infinite] absolute  top-1/3" />
        <SvgComponent className="animate-[rotations3_3s_linear_infinite] absolute top-1/3" />
        <p className="absolute top-4 -right-14 font-medium">Loading...</p>
      </div>
      <Pikachu className="relative translate-x-14" />
    </div>
  );
};

export default App;

import * as React from "react";
import "../App.css";
import { SvgComponent } from "../svg/svg";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <header className="bg-slate-200">
      <nav>
        <div className="max-w-7x1 mx-auto py-2 h-[10vh] flex justify-center items-center header">
          <SvgComponent />
          <h1>Pokemon</h1>
          <SvgComponent />
        </div>
      </nav>
    </header>
  );
};

export default Header;

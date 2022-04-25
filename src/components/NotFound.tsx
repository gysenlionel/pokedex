import * as React from "react";
import bleu from "../assets/images/bouleBleu.png";
import elephant from "../assets/images/elephant.png";
import mauve from "../assets/images/mauve.png";
import tortue from "../assets/images/tortue.png";

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <div className="flex justify-center">
      <img
        src={bleu}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] object-contain animate-[opacities_3s_alternate_infinite]"
      />
      <img
        src={elephant}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2  object-contain delay-1000 animate-[opacities_3s_alternate_infinite]"
      />
      <img
        src={mauve}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2 object-contain"
      />
      <img
        src={tortue}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2 object-contain"
      />
    </div>
  );
};

export default NotFound;

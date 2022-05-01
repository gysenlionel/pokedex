import * as React from "react";
import bleu from "../assets/images/bouleBleu.webp";
import elephant from "../assets/images/elephant.webp";
import mauve from "../assets/images/mauve.webp";
import tortue from "../assets/images/tortue.webp";

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <div className="flex justify-center sticky">
      <img
        src={bleu}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] object-contain animate-[opacities2_2s_alternate_infinite]"
      />
      <img
        src={elephant}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2  object-contain animate-[opacities2_2s_0.5s_alternate_infinite]"
      />
      <img
        src={mauve}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2 object-contain animate-[opacities2_2s_1s_alternate_infinite]"
      />
      <img
        src={tortue}
        alt="Pokemon bleu"
        className="w-[15%] h-[15%] lg:w-[10%] lg:h-[10%] ml-2 object-contain animate-[opacities2_2s_1.5s_alternate_infinite]"
      />
    </div>
  );
};

export default NotFound;

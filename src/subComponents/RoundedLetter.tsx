import * as React from "react";

interface IRoundedLetterProps {
  deg: string;
}

const RoundedLetter: React.FunctionComponent<IRoundedLetterProps> = ({
  deg,
  children,
}) => {
  return <span className={`${deg}`}>{children}</span>;
};

export default RoundedLetter;

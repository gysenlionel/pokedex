import * as React from "react";

interface ITabContentProps {
  toggleState: number;
  tabNumber: number;
}

const TabContent: React.FunctionComponent<ITabContentProps> = ({
  toggleState,
  tabNumber,
  children,
}) => {
  return (
    <div className={toggleState === tabNumber ? "block" : "hidden"}>
      {children}
    </div>
  );
};

export default TabContent;

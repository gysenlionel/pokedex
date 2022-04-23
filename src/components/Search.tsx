import * as React from "react";

interface ISearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FunctionComponent<ISearchProps> = ({ setSearch }) => {
  return (
    <div>
      {" "}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="w-48 h-7 border-2 border-slate-400 rounded-xl mt-4 ml-4 mb-1 px-3 py-2 focus:outline-none focus:border-[#FF4343FF] focus:ring-[#FF4343FF]"
        placeholder="Search pokemon..."
      />
    </div>
  );
};

export default Search;

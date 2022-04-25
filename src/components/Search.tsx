import React, { useEffect } from "react";

interface ISearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: string;
}

const Search: React.FunctionComponent<ISearchProps> = ({
  setSearch,
  setShowSearch,
  search,
}) => {
  useEffect(() => {
    if (search.length < 1) {
      setShowSearch(false);
    } else {
      setShowSearch(true);
    }
  }, [search.length, setShowSearch]);

  return (
    <div className="h-[7vh] w-screen bg-neutral-50 flex justify-center items-center z-30">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="w-48 h-7 border-2 border-slate-300 rounded-xl mt-2  px-3 py-2 focus:outline-none focus:border-[#FF4343FF] focus:ring-[#FF4343FF]"
        placeholder="Search pokemon..."
      />
    </div>
  );
};

export default Search;

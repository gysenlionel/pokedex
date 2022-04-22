import * as React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
// import Filters from "../components/Filters";
import { Pokemon } from "../types/data.model";
import Loader from "../components/Loader";
import { getPokemons } from "../hooks/getPokemons";
import { getNextPage } from "../hooks/getNextPage";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string>("");
  // const [loading, setLoading] = React.useState(true);
  // state pour infinite scroll
  const [loadPoke, setLoadPoke] = React.useState<boolean>(true);
  const [loadAsync, setLoadAsync] = React.useState<boolean>(false);

  // fetch data
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
  React.useEffect(() => {
    getPokemons(baseUrl, setPokemons, setNextUrl);
  }, [baseUrl]);

  // infinite scroll
  const loadMore = () => {
    // pour que typescript soit content scrollingElement ;-)
    if (!document.scrollingElement) {
      return;
    }
    // infinite scroll condition
    let scroll = document.scrollingElement.scrollHeight;
    if (window.innerHeight + document.documentElement.scrollTop + 1 > scroll) {
      setLoadAsync(true);
      setLoadPoke(true);
    }
  };

  React.useEffect(() => {
    // Page suivante
    if (loadPoke) {
      getNextPage(
        loadAsync,
        nextUrl,
        setNextUrl,
        baseUrl,
        setPokemons,
        setLoadAsync
      );
      setLoadPoke(false);
    }

    // infinite scroll quand on est en bas de page
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPoke, loadAsync, nextUrl, baseUrl]);

  // console.log(pokemons);

  // React.useEffect(() => {
  //   const loadData = async () => {
  //     await new Promise((r) => setTimeout(r, 2000));

  //     setLoading((loading) => !loading);
  //   };

  //   loadData();
  // }, []);

  return (
    <>
      {/* {loading ? (
        <Loader fullScreen="w-screen h-screen" />
      ) : (
        <> */}
      <Header />
      <main className="relative flex py-3 px-4 justify-center bg-neutral-50">
        <div
          className="grid lg:grid-cols-4 md:grid-cols-3
    sm:grid-cols-2 gap-4"
        >
          {pokemons.map((pokemon, index) => (
            <div key={`${pokemon.id}${index}`}>
              <Cart pokemon={pokemon} key={pokemon.id} />
            </div>
          ))}
        </div>

        {loadPoke && (
          <div className=" absolute translate-x-1/2 bottom-72 z-30 mr-28">
            <Loader />
          </div>
        )}
        <div className=" absolute bottom-24 translate-x-1/2 rounded-full border-neutral-900 border-2 animate-bounce z-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-neutral-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l-5 5m0 0l-5-5m5 5V6"
            />
          </svg>
        </div>
      </main>
      {/* </>
      )} */}
    </>
  );
};

export default Home;

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

  return (
    <>
      <Header />
      <main className="relative flex py-3 px-4 justify-center bg-neutral-50">
        {/* <div className="px-2 mr-4">
        <Filters />
      </div> */}
        <div
          className="grid lg:grid-cols-4 md:grid-cols-3
    sm:grid-cols-2 gap-4"
        >
          {pokemons.map((pokemon, index) => (
            <div
              key={`${pokemon.id}${index}`}
              // onClick={() => selectPokemon(viewDetail, pokemon.id, setDetail)}
            >
              <Cart pokemon={pokemon} key={pokemon.id} />
            </div>
          ))}
          {loadPoke && (
            <div className=" absolute bottom-10 left-1/2 ">
              <Loader />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

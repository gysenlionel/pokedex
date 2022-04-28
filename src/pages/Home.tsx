import * as React from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
// import Filters from "../components/Filters";
import { Pokemon } from "../types/data.model";
import Loader from "../components/Loader";
import { getPokemons } from "../hooks/getPokemons";
import { getNextPage } from "../hooks/getNextPage";
import Search from "../components/Search";
import { getPokemonSearch } from "../hooks/getPokemonSearch";
import NotFound from "../components/NotFound";
import { motion } from "framer-motion";

interface IHomeProps {}

// framer
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 0.5, delay: 1 },
  },
};

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = React.useState<string>("");
  const [search, setSearch] = React.useState("");
  const [arrowLoad, setArrowLoad] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [showSearch, setShowSearch] = React.useState(false);
  const [pokemonSearch, setPokemonSearch] = React.useState<Pokemon>();
  // state pour infinite scroll
  const [loadPoke, setLoadPoke] = React.useState<boolean>(true);
  const [loadAsync, setLoadAsync] = React.useState<boolean>(false);

  // fetch data
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
  React.useEffect(() => {
    setArrowLoad(false);
    getPokemons(baseUrl, setPokemons, setNextUrl, setArrowLoad);
  }, [baseUrl]);
  // fetch SearchPokemon
  React.useEffect(() => {
    getPokemonSearch(search, setPokemonSearch);
  }, [search]);

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
  React.useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1500));

      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <div className="bg-neutral-50">
      {loading ? (
        <Loader fullScreen="w-screen h-screen" />
      ) : (
        <div className="relative">
          <Header />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="h-[7vh] bg-neutral-50 flex justify-center items-center relative"
          >
            <Search
              setSearch={setSearch}
              setShowSearch={setShowSearch}
              search={search}
            />
          </motion.div>
          {!showSearch ? (
            <main className="relative flex py-3 px-4 justify-center bg-neutral-50">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="grid lg:grid-cols-4 md:grid-cols-3
    sm:grid-cols-2 gap-4"
              >
                {pokemons.map((pokemon, index) => (
                  <div key={`${pokemon.id}${index}`}>
                    <Cart pokemon={pokemon} key={pokemon.id} />
                  </div>
                ))}
              </motion.div>

              {loadPoke && (
                <div className=" absolute translate-x-1/2 bottom-72 z-30 mr-28">
                  <Loader />
                </div>
              )}
              {arrowLoad && (
                <div className=" absolute bottom-24 translate-x-1/2 rounded-full border-neutral-900 border-2 animate-bounce z-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-neutral-900"
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
              )}
            </main>
          ) : (
            <motion.main
              variants={containerVariants}
              exit="exit"
              className="relative h-[83vh] flex py-3 px-4 justify-center items-center bg-neutral-50"
            >
              <div>
                {typeof pokemonSearch?.name !== "undefined" ? (
                  <Cart
                    pokemon={pokemonSearch && pokemonSearch}
                    key={pokemonSearch && pokemonSearch.id}
                  />
                ) : (
                  <>
                    <NotFound />
                    <p className="lg:text-2xl md:text-xl text-base font-semibold text-center mt-4">
                      Pokemon not found...
                    </p>
                  </>
                )}
              </div>
            </motion.main>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;

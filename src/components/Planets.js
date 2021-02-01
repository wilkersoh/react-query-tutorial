import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key) => {
  console.log(key);
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery(["planets", "hello, ninjs"], fetchPlanets, {
    // staleTime: 0,
    // cacheTime: 10,
    // onSuccess: () => console.log("data fetched with not problem"),
  });

  if (status === "loading") return <div>loading</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <div>
      <h2>Planets</h2>
      <div>
        {data.results.map((planet) => (
          <Planet key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default Planets;

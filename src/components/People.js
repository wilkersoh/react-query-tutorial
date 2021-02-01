import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchpeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchpeople);

  console.log(data);

  if (status === "loading") return <div>loading</div>;
  if (status === "error") return <div>Error</div>;

  return (
    <div>
      <h2>People</h2>
      <div>
        {data.results.map((people) => (
          <Person key={people.name} person={people} />
        ))}
      </div>
    </div>
  );
};

export default People;

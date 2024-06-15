import { useEffect, useState } from "react";
import NavBar from "./NavBar"; 

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch actors data
    fetch("http://localhost:4000/actors")
      .then(response => response.json())
      .then(data => {
        setActors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching actors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading actors...</p>
        ) : (
          actors.length > 0 ? (
            actors.map(actor => (
              <div key={actor.name}>
                <h2>{actor.name}</h2>
                <ul>
                  {actor.movies.map(movie => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No actors found.</p>
          )
        )}
      </main>
    </>
  );
}

export default Actors;

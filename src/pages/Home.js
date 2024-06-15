import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movies data
    fetch("http://localhost:4000/movies")
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <div>
            {movies.length > 0 ? (
              movies.map(movie => (
                <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <Link to={`/movie/${movie.id}`}>View Info</Link>
                </div>
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default Home;

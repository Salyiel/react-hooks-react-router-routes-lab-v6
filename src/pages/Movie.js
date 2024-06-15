import { useEffect, useState } from "react";
import NavBar from "./NavBar"; 

function Movie() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movie data
    fetch(`http://localhost:4000/movie/${id}`) 
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movie:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <NavBar />
        {movie && <h1>{movie.title}</h1>}
      </header>
      <main>
        {movie && (
          <>
            <p>{movie.duration} minutes</p>
            <div>
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default Movie;

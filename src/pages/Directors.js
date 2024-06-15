import { useEffect, useState } from "react";
import NavBar from "./NavBar"; 

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch directors data
    fetch("http://localhost:4000/directors")
      .then(response => response.json())
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching directors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {loading ? (
          <p>Loading directors...</p>
        ) : (
          directors.length > 0 ? (
            directors.map(director => (
              <div key={director.name}>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map(movie => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>No directors found.</p>
          )
        )}
      </main>
    </>
  );
}

export default Directors;

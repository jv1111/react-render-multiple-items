import { render } from "@testing-library/react";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard"

const movies = [{
  "Title": "M1",
  "Number": "1"
}, {
  "Title": "M2",
  "Number": "2"
}]

function App() {

  const [mystate, setState] = useState(movies);

  console.log(mystate)

  return (
    <>
      {movies?.length > 0 ?
        (
          <div>
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        )
        :
        (
          <div>No movies</div>
        )
      }
    </>
  )
}

export default App;

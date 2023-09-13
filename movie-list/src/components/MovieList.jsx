import useApi from "../customHooks/useApi";
import { useMovielistContext } from "../providers/MovieListProvider";

export default function MovieList({}) {
  const { state, dispatch } = useMovielistContext();
  const movieList = useApi(
    `https://api.themoviedb.org/3/search/movie?api_key=ebc68260932ba2948d9ce53ecf1957bc&query=${state.query}`
  );

  const rows = movieList?.data?.results.map((entry, id) => (
    <tr key={id}>
      <td>{entry.title}</td>
    </tr>
  ));

  return (
    <div>
      <table>
        {" "}
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

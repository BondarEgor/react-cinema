import { Typography } from "@mui/material";
import CustomCarousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCardBig";
import MovieCardSmall from "../../components/MovieCardSmall/MovieCardSmall";
import { getTopMovies } from "../../services/api.services";
import { filterButtons } from "./constants";
import ErrorPage from "../ErrorPage";
import { useQuery } from "react-query";
import "./style.css";
import { useParams } from "react-router-dom";
import CustomLink from "../../components/kit/Link";

export default function HomePage() {
  const { genre } = useParams();

  const activeButton = filterButtons.findIndex(
    (button) => {
      return button.label === genre}
  );

  async function fetchData() {
    return await getTopMovies(genre ?? "");
  }

  const { data, isLoading, isError } = useQuery(["movies", genre], fetchData);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  if (!data) {
    return <h3>No data</h3>;
  }

  return (
    <div className="max-h-screen flex flex-col">
      <Typography sx={{ marginBottom: 1 }} variant="h4">
        My cinema
      </Typography>

      <div className="button-group">
        {filterButtons.map((button,idx) => {
          return (
            <CustomLink
              key={idx}
              isActiveBtn={activeButton === button.id}
              label={button.label}
              to={`/home/${button.genre}`}
            ></CustomLink>
          );
        })}
      </div>

      <div className="flex flex-grow-4 gap-8 mt-5 xs:flex-col">
        <MovieCard movie={data[1]} />
        <MovieCardSmall />
      </div>

      <div className="bottom-block mt-3">
        <Typography marginBottom={1} fontWeight={500} variant="h5">
          Special for you
        </Typography>
        <CustomCarousel data={data}/>
      </div>
    </div>
  );
}

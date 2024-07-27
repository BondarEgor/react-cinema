import { useQuery } from "react-query";
import CarouselCard from "../../components/CarouselCard";
import "./styles.css";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/Index";
import { useState } from "react";
import { fetchFavorites } from "./utils";
import { IFavoriteMovie } from "../../types/IFavoriteMovies";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function FavoritesPage() {
  const [filteredValue, setFilteredValue] = useState("");
  const navigate = useNavigate()
  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery<IFavoriteMovie[]>("favoriteMovies", fetchFavorites);

  const handleInputChange = (e: any) => {
    setFilteredValue(e.target.value);
  };

  const handleOnClick = (id:number) => {
		navigate(`/favorites/${id}`)
	}

  if (isLoading) {
    return <Loader loading={true}></Loader>;
  }

  if (isError) {
    return <NotFoundPage></NotFoundPage>;
  }

  return (
    <>
      <input
        onChange={handleInputChange}
        placeholder="Search your favorite movies"
        className="search-input"
      />
      <div className="wrapper">
        {movies
          ?.filter((movie) =>
            movie.title.toLowerCase().includes(filteredValue.toLowerCase())
          )
          .map((movie: any) => {
            return (
              <div onClick={() =>handleOnClick(movie.id)} key={movie.id} className="movie-block">
                  <CarouselCard movie={movie}></CarouselCard>
              </div>
            );
          })}
      </div>
    </>
  );
}

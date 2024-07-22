import { useQuery } from "react-query";
import CarouselCard from "../../components/CarouselCard";
import "./styles.css";
import Loader from '../../components/Loader/Loader'
import NotFoundPage from '../NotFoundPage/Index'
import { Button } from '@mui/material'

export default function FavoritesPage() {

  const fetchFavorites = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/favorites`
    );

    return await response.json();
  };
  const { data: movies, isLoading, isError } = useQuery("", fetchFavorites);
  const handleInputChange = () => {
    console.log(123)
    
  }
  if(isLoading){
    return <Loader loading={true}></Loader>
  }

  if(isError){
    return <NotFoundPage></NotFoundPage>
  }

  return (
    <>
      <input onChange={handleInputChange} placeholder='Search your favorite movies' className="search-input" autoFocus />
      <div className="wrapper">
        {movies.slice(0,8).map((movie: any) => {
          return (
            <div key={movie.id} className="movie-block">
              <CarouselCard movie={movie}></CarouselCard>
            </div>
            
          );
        })}
          <Button fullWidth sx={{width:'100%'}} variant='contained' color='warning'>Load more</Button>
      </div>
    </>
  );
}

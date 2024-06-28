import { StyledEngineProvider, Button } from "@mui/material";
import { useState } from "react";
import { FilteredButtons } from "../../types/filterButtons";
import "./ButtonGroup.css";
import { getMoviesByQuery } from "../../services/api.services";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import ErrorPage from "../../pages/ErrorPage";

export default function ButtonGroup({ buttons }: FilteredButtons) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<number | null>(0);

  const searchParams = new URLSearchParams(location.search);
  const genre = searchParams.get("genre");

  const handleButtonClick = (btnId: number, genre: string) => {
    setActiveButton(btnId);
    searchParams.set("genre", genre);
    navigate({
      search: searchParams.toString(),
    });
  };

  async function fetchData() {
    if (genre) {
      const data = await getMoviesByQuery(genre);
      return data;
    }
    return null;
  }

  const { data, isLoading, isError } = useQuery(["movies", genre], fetchData, {
    enabled: !!genre,
  });

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (!data) {
    return <h3>No data received</h3>;
  }

  return (
    <StyledEngineProvider injectFirst>
      <div className="button-group">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={() => handleButtonClick(button.id, button.value)}
            className={`custom-button ${
              activeButton === button.id ? "active-button" : ""
            }`}
          >
            {button.value}
          </Button>
        ))}
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error occurred while fetching movies</div>}
      </div>
    </StyledEngineProvider>
  );
}

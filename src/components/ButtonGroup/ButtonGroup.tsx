import { StyledEngineProvider, Button } from "@mui/material";
import { useState } from "react";
import { FilteredButtons } from "../../types/filterButtons";
import "./ButtonGroup.css";
import { getMoviesByQuery } from "../../services/api.services";

export default function ButtonGroup({ buttons }: FilteredButtons) {
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const handleButtonClick = async (btnId: number, genre: string) => {
    setActiveButton(btnId);
    const fetchData = await getMoviesByQuery(genre);
  };
  return (
    <StyledEngineProvider injectFirst>
      <div className="button-group">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={() => handleButtonClick(button.id, button.value)}
            className={`custom-button 
						${activeButton === button.id ? "active-button" : ""}`}
          >
            {button.value}
          </Button>
        ))}
      </div>
    </StyledEngineProvider>
  );
}

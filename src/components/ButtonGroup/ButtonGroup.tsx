import { StyledEngineProvider, Button } from '@mui/material';
import { useState } from 'react';
import { FilteredButtons } from '../../types/filterButtons';
import './ButtonGroup.css';

export default function ButtonGroup({ buttons }: FilteredButtons) {
  const [activeButton, setActiveButton] = useState<number | null>(1);

  return (
    <StyledEngineProvider injectFirst>
      <div className="button-group">
        {buttons.map((button) => (
          <Button
            key={button.id}
            onClick={() => setActiveButton(button.id)}
            className={`custom-button 
						${activeButton === button.id ? 'active-button' : ''}`}
          >
            {button.value}
          </Button>
        ))}
      </div>
    </StyledEngineProvider>
  );
}

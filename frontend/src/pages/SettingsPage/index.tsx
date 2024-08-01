import { Button } from "@mui/material";
import "./styles.css";
import SettingsCard from "../../components/kit/SettingsCard";
import { BUTTONS, SETTING_CARDS } from "./constants";

export default function SettingsPage() {
  return (
    <div className="container-block">
      <header className="header-b">Integrations</header>
      <div className="btns-group">
        {BUTTONS.map((button, index) => {
          return (
            <Button key={index} variant="outlined" color="warning">
              {button}
            </Button>
          );
        })}
      </div>
      <p className="popular">
        Popular <span className="popular-amount">(6)</span>
      </p>

      <div className="cards">
        {SETTING_CARDS.map((card, index) => {
          return (
            <SettingsCard
              key={index}
              label={card.label}
              icon={card.icon}
              badge={card.badge}
              description={card.description}
              color={card.color}
            ></SettingsCard>
          );
        })}
      </div>
    </div>
  );
}

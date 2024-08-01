import { Switch, ToggleButton } from "@mui/material";
import "./styles.css";

export interface ISettingsCard {
  label: string;
  icon: string;
  badge: string;
  description: string;
	color: string
}
const SettingsCard = ({ label, icon, badge, description,color }: ISettingsCard) => {
  return (
    <div className="settings-card">
      <div className="card-icon">
        <div className="icon-bg">
          <i style={{color}} className={icon}></i>
        </div>
      </div>
      <div className="card-name">
        <div className="name">{label}</div>
        <div className="card-name-badge">{badge}</div>
      </div>
      <div className="card-name-desc">{description}</div>
      <div className="configure-label">
        <div className="left-block">
          <i className="fa-solid fa-gear"></i>
          <p className="configure-app">Configure App</p>
        </div>
        <div className="enable-toggle">
          <div className="toggle-status">Enabled</div>
          <Switch color="warning"></Switch>
        </div>
      </div>
    </div>
  );
};

export default SettingsCard;

import "../styles/button.css";
import WarningIcon from "@mui/icons-material/Warning";
import SickIcon from "@mui/icons-material/Sick";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
import WcIcon from "@mui/icons-material/Wc";
import HelpIcon from "@mui/icons-material/Help";

import { Link, useNavigate } from "react-router-dom";

const TitleScreen = () => {
  const navigate = useNavigate();

  function handleNormalClick(event, data) {
    navigate("/InfoScreen?data=" + data);
  }

  const handleUbehagClick = () => {
    navigate("/PainoMeter");
  };

  return (
    <div className="app">
      <div className="infoboks">
        <button
          id="alarm-button"
          className="alarm-knapp icon"
          onClick={(e) => handleNormalClick(e, "om ditt ønske om hjelp")}
        >
          <WarningIcon />
          Alarm
        </button>
        <button
          style={{ backgroundColor: "#a88100" }}
          id="Ubehag-button"
          className="vanlig-knapp icon"
          onClick={handleUbehagClick}
        >
          <SickIcon />
          Ubehag
        </button>
        <button
          id="turn-button"
          className="vanlig-knapp icon"
          onClick={(e) => handleNormalClick(e, "om ditt ønske om å snu deg")}
        >
          <RotateLeftIcon />
          Snu
        </button>
        <button
          id="toilet-button"
          className="vanlig-knapp icon"
          onClick={(e) =>
            handleNormalClick(e, "om ditt ønske om å bruke toalettet")
          }
        >
          <WcIcon />
          Toalett
        </button>
        <button
          id="water-button"
          className="vanlig-knapp icon"
          onClick={(e) => handleNormalClick(e, "om at du har noe å spørre om")}
        >
          <HelpIcon />
          Annet
        </button>
      </div>
    </div>
  );
};

export default TitleScreen;

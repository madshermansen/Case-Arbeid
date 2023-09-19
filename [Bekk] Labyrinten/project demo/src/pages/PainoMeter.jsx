import { lightGreen } from "@mui/material/colors";
import "../styles/painometer.css";
import { useNavigate } from "react-router-dom";

export default function PainoMeter() {
  const navigate = useNavigate();

  function handleClick(event, data) {
    navigate("/InfoScreen?data=" + data);
  }

  return (
    <>
      <div className="app">
        <h1>Hvor stort er ditt ubehag?</h1>
        <div className="ubehagskala">
          <button
            onClick={(e) => handleClick(e, "om ditt milde ubehag")}
            className="vanlig-knapp"
            style={{ backgroundColor: "#FFC1C1", fontSize: "30px" }}
          >
            Lite
          </button>
          <button
            onClick={(e) => handleClick(e, "om ditt moderate ubehag")}
            className="vanlig-knapp"
            style={{ backgroundColor: "#FF7777", fontSize: "30px" }}
          >
            Middels
          </button>
          <button
            onClick={(e) => handleClick(e, "om ditt store ubehag")}
            className="vanlig-knapp"
            style={{ backgroundColor: "#CC0000", fontSize: "30px" }}
          >
            Mye
          </button>
        </div>
      </div>
    </>
  );
}

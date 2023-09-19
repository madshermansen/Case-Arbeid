
import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


function getDataFromUrl(search) {
    const params = new URLSearchParams(search);
    const data = params.get("data");
    return data ? decodeURIComponent(data) : "";
  }

export default function InfoScreen() {
    const location = useLocation();
    const data = getDataFromUrl(location.search);
    const [text, setText] = React.useState("Sykepleier har blitt varslet " + data);
    const navigate = useNavigate(); 

    useEffect(() => {
        const interval = setInterval(() => {
            handleTextChange();
        }, 6000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])

    const handleClose = () => {
        // switch page to home
        
        navigate('/')
    };

    const handleTextChange = () => {
        setText("Sykepleier er på vei");
    };

    return (
        <div className="InfoPage">
            <div>
                <p>{text}</p>
            </div>
            <div className="buttonInfo">
                <button className="CloseButton" onClick={handleClose}>
                Avbryt
                </button>
            </div>
        </div>
    );
}
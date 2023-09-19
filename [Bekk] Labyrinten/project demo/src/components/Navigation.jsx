import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <nav>
    <Link to="/" className="button">
      Hjem
    </Link>
    <Link to="/ignis" className="button">
      Gå til Ignis
    </Link>
    <a className="button" href="https://reactjs.org">
      Sjekk ut React
    </a>
  </nav>
);

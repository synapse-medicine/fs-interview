import {Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div id="home">
      <h1>Patient application</h1>
      <Link to={`/patients/1`}>View Patient 1</Link>
      <Link to={`/patients/2`}>View Patient 2</Link>
    </div>
  );
}

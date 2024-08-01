import { Link } from "react-router-dom";
import "./styles.css";
import { Button } from "@mui/material";

export default function NotFoundPage() {
  return (
    <>
      <div className="wrapper-page">
        <h1 className='not-found'>404 - Not Found!</h1>
        <Link to="/home?genre=all">
          <Button variant='contained'>Go Home</Button>
        </Link>
      </div>
    </>
  );
}

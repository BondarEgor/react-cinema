import { Button } from "@mui/material";
import "./styles.css";
import { Link } from "react-router-dom";

export default function MovieDetails() {
  return (
    <div className="wrapper-details">
      <Link to={"/favorites"} className="back-btn">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <div className="left-block">
        <h1 className="movie-header ">The Last Of Us II</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit odio
          eveniet dolore, dicta laborum quae provident suscipit. Id cum, omnis
          aperiam quod labore, ea quam eveniet eos tempora modi deserunt maxime
          corrupti, debitis consequuntur rerum optio illo dolor dolores vitae?
          Modi praesentium qui veritatis mollitia sed esse dolor tempora quos,
          neque cupiditate dolorum sapiente quisquam veniam debitis. Aliquid
          inventore aut cum, esse, illo libero delectus enim mollitia expedita
          labore quas voluptate eveniet excepturi, officiis doloremque.
          Voluptatibus, explicabo ea illum accusantium, temporibus tenetur
          dolorum nobis culpa suscipit dolorem soluta corporis blanditiis
          tempora eaque alias recusandae. Suscipit ut amet perferendis quod
          dolore!
        </p>
        <div className="btn-group">
          <Button className="btn" color="warning" variant="contained">
            Watch
          </Button>
          <Button className="btn" variant="outlined" color="warning">
            Trailer
          </Button>
        </div>
      </div>
    </div>
  );
}

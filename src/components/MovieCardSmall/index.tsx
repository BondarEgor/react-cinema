import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MovieCardSmallProps } from "../../types/MovieCardSmall";

export const MovieCardSmall = ({ article }: MovieCardSmallProps) => {
  const { title, description, url } = article;

  return (
    <Card sx={{ maxWidth: 310, maxHeight: 250, borderRadius: 4, flexGrow: 3 }}>
      <CardContent>
        <Typography  variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: " center" }}>
        <Link to={url} className=''>
          <Button size="small" color="warning" variant="contained">
            Read more
          </Button>
        </Link>
      </Box>
    </Card>
  );
};

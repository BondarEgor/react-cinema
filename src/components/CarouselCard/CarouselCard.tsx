import { Box, Card, CardActionArea, SvgIcon, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CarouseCard } from "../../types/CarouselCard";

export default function CarouselCard({ movie }: CarouseCard) {
  return (
    <>
      <CardActionArea>
        <Card
          sx={{
            width:300,
            height: 200,
            objectFit: "cover",
            backgroundImage: `url(${movie.image})`,
          }}
        ></Card>
      </CardActionArea>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 1,
          paddingRight: 2,
          justifyItems: "end",
        }}
      >
        <Typography fontWeight={500}>{movie.title}</Typography>

        <Box className="flex items-center gap-5">
          <Typography variant="body2" fontWeight={300}>
            {movie.year}
          </Typography>
          <SvgIcon>
            <StarIcon color="warning" />
          </SvgIcon>
          <Typography fontWeight={300}>{}</Typography>
        </Box>
      </Box>
    </>
  );
}

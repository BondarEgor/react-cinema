import { Box, Card } from "@mui/material";
import './styles.css';

export default function FavoriteSkeleton() {
  return (
    <>
      <Card
        sx={{
          width: 300,
          height: 200,
          backgroundColor: "#e0e0e0",
          animation: "shimmer 1.5s infinite",
        }}
      ></Card>
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
        <Box sx={{ width: "70%", height: "20px", backgroundColor: "#e0e0e0", animation: "shimmer 1.5s infinite" }}></Box>
        <Box className="flex items-center gap-5">
          <Box sx={{ width: "30px", height: "20px", backgroundColor: "#e0e0e0", animation: "shimmer 1.5s infinite" }}></Box>
          <Box sx={{ width: "20px", height: "20px", backgroundColor: "#e0e0e0", animation: "shimmer 1.5s infinite" }}></Box>
        </Box>
      </Box>
    </>
  );
}

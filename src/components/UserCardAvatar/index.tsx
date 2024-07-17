import { Avatar, Typography, Button, Box } from "@mui/material";
import "./styles.css";
import { useFollowUser } from "../../hooks/useFollowUser";
import { buttonState } from "./constants";
import { IUserInfo } from '../../hooks/useUserInfo'

export default function UserInfoAvatar({
  name,
  job,
  origin,
  poster,
}: IUserInfo) {
  const { isFollowed, handleOnFollow } = useFollowUser(false);

  return (
    <>
      <div className="user-info">
        <Avatar sx={{ width: "160px", height: "160px" }} src={poster}></Avatar>
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "100" }}>
          {job}
        </Typography>
        <Typography sx={{ textTransform: "capitalize" }}>{origin}</Typography>
        <Box sx={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <Button
            onClick={handleOnFollow}
            variant={isFollowed ? "outlined" : "contained"}
            color="warning"
          >
            {isFollowed ? buttonState.unfollow : buttonState.follow}
          </Button>
          <Button variant="outlined" color="warning">
            Message
          </Button>
        </Box>
      </div>
    </>
  );
}

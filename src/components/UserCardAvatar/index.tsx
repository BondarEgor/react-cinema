import { Avatar, Typography, Button } from "@mui/material";

export default function UserInfoAvatar() {
  return (
    <>
      <div className="user-info">
        <Avatar src=""></Avatar>
        <Typography>John Smith</Typography>
        <Typography>Ful l stack</Typography>
        <Typography>Bay Area, San francisco</Typography>
        <Button variant="contained" color="warning">
          Follow
        </Button>
        <Button color="warning">Message</Button>
      </div>
    </>
  );
}

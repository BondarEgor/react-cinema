import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import "./styles.css";
import UserInfoAvatar from "../../components/UserCardAvatar";

export default function ProfilePage() {
  return (
    <div className="main-block">
      <aside className="aside">
        <UserInfoAvatar></UserInfoAvatar>
        <div className="socials">
          <div className="card-row flex p-5 justify-around">
            <div className="flex-1 col font-bold">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="flex-1 col-right  font-light">
              example@example.com
            </div>
          </div>
          <hr />

          <div className="card-row flex p-5 justify-around">
            <div className="flex-1 col font-bold">Email</div>
            <div className="flex-1 col-right  font-light">
              example@example.com
            </div>
          </div>
          <hr />

          <div className="card-row flex p-5 justify-around">
            <div className="flex-1 col font-bold">Email</div>
            <div className="flex-1 col-right  font-light">
              example@example.com
            </div>
          </div>
          <hr />

          <div className="card-row flex p-5 justify-around">
            <div className="flex-1 col font-bold">Email</div>
            <div className="flex-1 col-right  font-light">
              example@example.com
            </div>
          </div>
          <hr />

          <div className="card-row flex p-5 justify-around">
            <div className="flex-1 col font-bold">Email</div>
            <div className="flex-1 col-right  font-light">
              example@example.com
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="personal-data">
          <div className="card-body">
            <div className="card-row flex p-5 justify-around">
              <div className="col font-bold flex-1">Full name</div>
              <div className="flex-1 col-right  font-light">
                Johnathan Brown
              </div>
            </div>
            <hr />
            <div className="card-row flex p-5 justify-around">
              <div className="flex-1 col font-bold">Email</div>
              <div className="flex-1 col-right  font-light">
                example@example.com
              </div>
            </div>
            <hr />
            <div className="card-row flex p-5 justify-around">
              <div className="flex-1 col font-bold">Phone</div>
              <div className="flex-1 col-right  font-light">(097) 234-5678</div>
            </div>
            <hr />
            <div className="card-row flex p-5 justify-around">
              <div className="flex-1 col font-bold">Mobile</div>
              <div className="flex-1 col-right  font-light">(098) 765-4321</div>
            </div>
            <hr />
            <div className="card-row flex p-5 justify-around">
              <div className="flex-1 col font-bold">Address</div>
              <div className="flex-1 col-right  font-light">
                Bay Area, San Francisco, CA
              </div>
            </div>
          </div>
        </div>
        <div className="projects">
          <div className="project-1">
            <div>
              asignment<span>Project status</span>
            </div>
            <div>
              <span>Web Design</span>
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div className="project-2">
            <div>
              asignment<span>Project status</span>
            </div>
            <div>
              <span>Web Design</span>
              <LinearProgress variant="determinate" value={90} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

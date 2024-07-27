import "./styles.css";
import UserInfoAvatar from "../../components/UserCardAvatar";
import FieldWithUnderscore from "../../components/kit/FieldWithUnderscore";
import { socials } from "./constants";
import ProjectStatus from "../../components/kit/ProjectStatus";
import { useUserInfo } from "../../hooks/useUserInfo";
import NotFoundPage from '../NotFoundPage/Index'
import Loader from '../../components/Loader/Loader'

export default function ProfilePage() {
  const {isLoading, isError, userCredentials, userInfo, userSocials} = useUserInfo()

  if (isLoading) {
    return <Loader loading={true}></Loader>
  }

  if (isError) {
    return <NotFoundPage></NotFoundPage>
  }

  return (
    <div className="main-block">
      <aside className="aside">
        <UserInfoAvatar
          isLoading={true}
          name={userInfo?.name}
          job={userInfo?.job}
          origin={userInfo?.origin}
          poster={userInfo?.poster}
        ></UserInfoAvatar>
        <div className="socials">
          {userSocials?.map((social: any, index: any) => {
            return (
              <FieldWithUnderscore
                key={social.name}
                isTextNeeded={false}
                fieldKey={social.name}
                fieldValue={social.value}
                isLastField={socials.length - 1 === index}
              ></FieldWithUnderscore>
            );
          })}
        </div>
      </aside>
      <main className="main">
        <div className="personal-data">
          <div className="card-body">
            {userCredentials.map((credential: any, index: any) => {
              return (
                <FieldWithUnderscore
                  key={credential.name}
                  fieldKey={credential.name}
                  fieldValue={credential.value}
                  isLastField={userCredentials.length - 1 === index}
                  isTextNeeded={true}
                ></FieldWithUnderscore>
              );
            })}
          </div>
        </div>

        <div className="projects">
          <div className="project-1">
            <ProjectStatus></ProjectStatus>
          </div>
          <div className="project-2">
            <ProjectStatus></ProjectStatus>
          </div>
        </div>
      </main>
    </div>
  );
}

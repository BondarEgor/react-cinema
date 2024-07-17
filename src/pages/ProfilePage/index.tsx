import "./styles.css";
import UserInfoAvatar from "../../components/UserCardAvatar";
import FieldWithUnderscore from "../../components/kit/FieldWithUnderscore";
import { socials, userCredentials } from "./constants";
import ProjectStatus from "../../components/kit/ProjectStatus";
import { useUserInfo } from "../../hooks/useUserInfo";
import { useUserCredentials } from "../../hooks/useUserCredentials";
import { useUserSocials } from "../../hooks/useUserSocials";

export default function ProfilePage() {
  const {
    data: userInfo,
    isLoading: userInfoLoading,
    isError: userInfoError,
  } = useUserInfo();

  const {
    data: userCred,
    isLoading: userCredLoading,
    isError: userCredError,
  } = useUserCredentials();

  const {
    data: userSocials,
    isLoading: userSocialsLoading,
    isError: userSocialsError,
  } = useUserSocials();

  if (userCredLoading || userInfoLoading || userSocialsLoading) {
    return <p>Loading...</p>;
  }

  if (userCredError || userInfoError || userSocialsError) {
    return <p>Error...</p>;
  }

  return (
    <div className="main-block">
      <aside className="aside">
        <UserInfoAvatar
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
            {userCred.map((credential: any, index: any) => {
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

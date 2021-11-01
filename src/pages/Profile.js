import React, { useContext, useEffect } from "react";
import { githubContext } from "../context/github/githubContext";
import { Link } from "react-router-dom";
import { Repos } from "../components/Repos";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(githubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
  } = user;

  return (
    <>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img height={150} width={150} src={avatar_url} alt={name} />
              <h1>{name}</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              )}
              <a href={html_url} target="_blak" className="btn btn-dark">
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>UserName</strong> {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания: </strong> {login}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong> {login}
                  </li>
                )}
              </ul>
              <div className="badge bg-primary">
                  Подписчики: {followers}
              </div>
              <div className="badge bg-success">
                  Подписки: {following}
              </div>
              <div className="badge bg-info">
                  Репозитории: {public_repos}
              </div>
              <div className="badge bg-dark">
                  Gists: {public_gists}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos}/>
    </>
  );
};

Profile.propTypes = {};

export default Profile;

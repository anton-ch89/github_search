import React, { useReducer } from "react";
import axios from "axios";
import {
  CLEAR_USERS,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";
import { githubContext } from "./githubContext";
import { githubReducer } from "./githubReducer";

    //eslint-disable-next-line
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    //eslint-disable-next-line
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    //eslint-disable-next-line
const clientData = 'client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}';

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const search = async (value) => {
    setLoading();

    const response = await axios.get(
      `https://api.github.com/search/users?q=${value}& + ${clientData}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items,
    });
  };

  const getUser = async (name) => {
    setLoading();

    const response = await axios.get(
      `https://api.github.com/users/${name}?+ ${clientData}`
    );
    dispatch({
      type: GET_USER,
      payload: response.data
    });
  };

  const getRepos = async (name) => {
    setLoading();

    const response = await axios.get(
        `https://api.github.com/users/${name}/repos?per_page=5& + ${clientData}`
      );

    dispatch({
      type: GET_REPOS,
      payload: response.data
    });
  };

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { user, users, repos, loading } = state;

  return (
    <githubContext.Provider
      value={{
        search,
        getRepos,
        getUser,
        clearUsers,
        setLoading,
        user,
        users,
        repos,
        loading,
      }}
    >
      {children}
    </githubContext.Provider>
  );
};

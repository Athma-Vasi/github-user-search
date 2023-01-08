import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Container } from "../styledTwComponents/Container";
import type { ApiResponse } from "../types/typings";
import { Search } from "./scenes/search";

const Home: NextPage = () => {
  const initialState = {
    themeState: {},
  };

  return <Search />;
};

export default Home;

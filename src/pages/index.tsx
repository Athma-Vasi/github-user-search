import { Octokit } from "@octokit/core";
import { request } from "@octokit/request";
import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Container } from "../styledTwComponents/Container";
import type { ApiResponse } from "../types/typings";
import { Search } from "./scenes/search";

const Home: NextPage = () => {
  const [userData, setUserData] = useState<ApiResponse | null>(null);
  const initialState = {
    themeState: {},
    appState: {},
  };

  useEffect(() => {
    const octokit = new Octokit({
      auth: "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",
    });

    const fetchData = async () => {
      try {
        const response = await octokit.request("GET /users/Athma-Vasi", {
          username: "Athma-Vasi",
        });

        setUserData(response as ApiResponse);
      } catch (error) {
        console.error(error);
      }
    };

    void fetchData();
  }, []);

  const response: ApiResponse = {
    status: 200,
    url: "https://api.github.com/users/Athma-Vasi?username=Athma-Vasi",
    headers: {
      "cache-control": "private, max-age=60, s-maxage=60",
      "content-type": "application/json; charset=utf-8",
      etag: 'W/"a7a11763e32f18549851ec8a82fd0ea00340de1b5bb417254ade324103557ed7"',
      "last-modified": "Tue, 13 Dec 2022 22:56:43 GMT",
      "x-github-media-type": "github.v3; format=json",
      "x-github-request-id": "CC0D:01B4:51BEAC:A9DD2A:63BA43AC",
      "x-oauth-scopes": "repo, user",
      "x-ratelimit-limit": "5000",
      "x-ratelimit-remaining": "4999",
      "x-ratelimit-reset": "1673154794",
      "x-ratelimit-resource": "core",
      "x-ratelimit-used": "1",
    },
    data: {
      login: "Athma-Vasi",
      id: 96086045,
      node_id: "U_kgDOBbooHQ",
      avatar_url: "https://avatars.githubusercontent.com/u/96086045?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Athma-Vasi",
      html_url: "https://github.com/Athma-Vasi",
      followers_url: "https://api.github.com/users/Athma-Vasi/followers",
      following_url:
        "https://api.github.com/users/Athma-Vasi/following{/other_user}",
      gists_url: "https://api.github.com/users/Athma-Vasi/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Athma-Vasi/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/Athma-Vasi/subscriptions",
      organizations_url: "https://api.github.com/users/Athma-Vasi/orgs",
      repos_url: "https://api.github.com/users/Athma-Vasi/repos",
      events_url: "https://api.github.com/users/Athma-Vasi/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Athma-Vasi/received_events",
      type: "User",
      site_admin: false,
      name: null,
      company: null,
      blog: "",
      location: null,
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 24,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: "2021-12-13T21:06:43Z",
      updated_at: "2022-12-13T22:56:43Z",
      private_gists: 0,
      total_private_repos: 1,
      owned_private_repos: 1,
      disk_usage: 70900,
      collaborators: 0,
      two_factor_authentication: false,
      plan: {
        name: "free",
        space: 976562499,
        collaborators: 0,
        private_repos: 10000,
      },
    },
  };

  return (
    <div>
      {JSON.stringify(userData)}
      <Search />
    </div>
  );
};

export default Home;

// personal access token
// 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

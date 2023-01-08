import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { Container } from "../styledTwComponents/Container";
import { Search } from "./scenes/search";

const Home: NextPage = () => {
  const [userData, setUserData] = useState<unknown | null>(null);
  const initialState = {
    themeState: {},
    appState: {},
  };

  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;

// personal access token
// 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

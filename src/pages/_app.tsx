import { type AppType } from "next/dist/shared/lib/utils";
import { Container } from "../styledTwComponents/Container";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component className="app" {...pageProps} />;
};

export default MyApp;

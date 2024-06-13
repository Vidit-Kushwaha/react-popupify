import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

function Home() {
  return <Redirect to={useBaseUrl("/introduction")} />;
}

export default Home;
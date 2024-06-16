// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-unresolved */
// esling no-use-before-define: off
import { Redirect } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";

function Home() {
  return <Redirect to={useBaseUrl("/introduction")} />;
}

export default Home;
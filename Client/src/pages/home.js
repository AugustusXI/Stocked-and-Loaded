import React from "react";
import { useQuery } from "@apollo/client";
import { IN_STOCK } from "../utils/Queries";
const Home = () => {
  const { loading, data } = useQuery(IN_STOCK);

  return <div>home</div>;
};

export default Home;

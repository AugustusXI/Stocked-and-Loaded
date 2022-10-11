import React from "react";
import { useQuery } from "@apollo/client";
import { IN_STOCK } from "../utils/queries";
import CurrentInventory from "../components/CurrentInventory";
const Home = () => {
  const { loading, data } = useQuery(IN_STOCK);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <CurrentInventory />
        </div>
      </div>
    </main>
  );
};

export default Home;

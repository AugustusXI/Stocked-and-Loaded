import React from "react";
import { OUT_OF_STOCK } from "../utils/queries";
import { useQuery } from "@apollo/client";

const OutOfStock = () => {
  const { loading, data } = useQuery(OUT_OF_STOCK);
  const inventory = data?.outOfStock;
  if (!data?.outOfStock.length) {
    return <h3>Everything's in stock!</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        86'd Items
      </h3>
      <div className="flex-row my-4">
        {inventory &&
          inventory.map((food) => (
            <div key={food._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">{food.name}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OutOfStock;

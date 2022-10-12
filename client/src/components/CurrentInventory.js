import React from "react";
import { IN_STOCK } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const CurrentInventory = () => {
  const { foodId } = useParams();

  const { loading, data } = useQuery(IN_STOCK, {
    variables: { foodId: foodId },
  });
  console.log(data?.foods);
  const inventory = data?.inStock;
  console.log(inventory);
  if (!inventory.length) {
    return <h3>We're Completely Out of Stock</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Inventory
      </h3>
      <div className="flex-row my-4">
        {inventory &&
          inventory.map((food) => (
            <div key={food._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {food.name}
                  <span style={{ fontSize: "0.825rem" }}>
                    on {food.inStock}
                  </span>
                </h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CurrentInventory;
import React from "react";
import { IN_STOCK } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE } from "../utils/mutations";

const CurrentInventory = () => {
  const { loading, data } = useQuery(IN_STOCK);
  const inventory = data?.inStock;
  const [update, { error }] = useMutation(UPDATE);
  const updateHandler = async () => {
    await update({
      variables: {
        inStock,
        onOrder,
      },
    });
  };

  if (!data?.inStock.length) {
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
                <h5 className="card-header">{food.name}</h5>
                <button onclick={update(food.name)} id="update">
                  Update
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CurrentInventory;

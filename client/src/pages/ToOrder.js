import React from "react";
import { TO_ORDER } from "../utils/queries";
import { useQuery } from "@apollo/client";

const ToOrder = () => {
  const { loading, data } = useQuery(TO_ORDER);
  const inventory = data?.toOrder;
  if (!data?.toOrder.length) {
    return <h3>Nothing's on order</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        To Be Ordered
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

export default ToOrder;

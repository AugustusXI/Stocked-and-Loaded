import React, { useState, useEffect } from "react";
import { TO_ORDER } from "../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { UPDATE } from "../utils/mutations";

const ToOrder = () => {
  const { loading, data } = useQuery(TO_ORDER);
  const inventory = data?.toOrder;
  const [food, setFood] = useState();

  const [updateFood, { error }] = useMutation(UPDATE);
  const updateHandler = async () => {
    await updateFood(
      {
        variables: {
          name: food,
        },
      },
      []
    );
  };
  useEffect(() => {
    if (food) {
      updateHandler();
      window.location.reload();
    }
  }, [food]);
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
          inventory.map((item) => (
            <div key={item._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">{item.name}</h5>
                <button onClick={() => setFood(item.name)} id="update">
                  Update
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ToOrder;

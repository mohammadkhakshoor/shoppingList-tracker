import React from "react";

const ProductShowCard = ({ items, setItems, filterTerm, sortBy, filterBy }) => {
  const result = items
    .filter((i) => i.productName.includes(filterTerm))
    .filter((i) => (filterBy === "nothing" ? i : i.productType === filterBy))
    .sort((a, b) => {
      if (sortBy === "No") {
        return 0;
      }
      if (sortBy === "Amount") {
        return a.amount - b.amount;
      }
      if (sortBy === "Price") {
        return a.price - b.price;
      }
    });

  const deleteItem = (id) => {
    setItems((item) => item.filter((i) => i.id !== id));
  };

  return result.length !== 0 ? (
    <div className="  grid  grid-cols-4 lg:gap-4 gap-[0.5rem]  max-sm:grid-cols-2 max-lg:grid-cols-3 hexa-back lg:p-4 p-[0.5rem] rounded-md ">
      {result.map((i) => {
        return (
          <div
            key={i.id}
            className="   bg-bgCard rounded-md text-textGray px-4 py-6 flex gap-6 justify-between "
          >
            <div className="  flex flex-col gap-2">
              <h2 className="  lg:text-3xl text-2xl font-mono text-purple-300">
                {" "}
                {i.productName}
              </h2>
              <p>
                <span className="  text-white font-bold tracking-wider">
                  type :{" "}
                </span>
                {i.productType}
              </p>
              <p>
                <span className="  text-white font-bold tracking-wider">
                  amount :
                </span>{" "}
                {i.amount}
              </p>
              <p>
                <span className="  text-white font-bold tracking-wider">
                  price :
                </span>{" "}
                ${i.price}
              </p>
              <p>
                <span className="  text-white font-bold tracking-wider">
                  need fridge :
                </span>{" "}
                {i.needFridge}
              </p>
            </div>
            <button className="   self-start" onClick={() => deleteItem(i.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#db3036"
                className="  w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  ) : (
    <p className="  flex justify-center items-center text-4xl text-white capitalize  font  tracking-wider">
      there is no item
    </p>
  );
};

export default ProductShowCard;

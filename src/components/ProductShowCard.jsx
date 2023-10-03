import React from "react";

const ProductShowCard = ({ items, setItems, filterTerm, sortBy, filterBy }) => {
  const result = items
    .filter((i) => i.productName.includes(filterTerm.toLowerCase()))
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
    <div className="  grid  grid-cols-4 gap-4   max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 glassmorphismCard  backdrop-blur-sm hexa-back p-4  rounded-md ">
      {result.reverse().map((i) => {
        return (
          <div
            key={i.id}
            className="glassmorphismCard rounded-md  p-4 lg:p-4 flex max-sm:gap-1 gap-2 justify-between "
          >
            <div className="  flex flex-col gap-2">
              <h2 className="  lg:text-2xl  font-bold text-2xl">
                {" "}
                {i.productName.at(0).toUpperCase() +
                  i.productName.slice(1).toLowerCase()}
              </h2>
              <div className="max-lg:grid max-lg:grid-cols-2 max-lg:gap-x-3 max-lg:gap-y-[1px]">
                <p>
                  <span className="  text-[0.9rem] font-bold ">type : </span>
                  {i.productType}
                </p>
                <p>
                  <span className="  text-[0.9rem] font-bold ">amount :</span>{" "}
                  {i.amount}
                </p>
                <p>
                  <span className="  text-[0.9rem] font-bold ">price :</span> $
                  {i.price}
                </p>
                <p>
                  <span className="  text-[0.9rem] font-bold ">
                    need fridge :
                  </span>{" "}
                  {i.needFridge}
                </p>
              </div>
            </div>
            <button className="   self-start" onClick={() => deleteItem(i.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#cf3c61"
                className="  w-6 h-6    relative top-1"
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
    <p className=" dark:text-gray-400  flex justify-center items-center text-2xl p-10  font-bold text-gray-900 uppercase  font  tracking-wider">
      there is no item
    </p>
  );
};

export default ProductShowCard;

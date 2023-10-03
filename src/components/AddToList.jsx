import React from "react";

const AddToList = () => {
  return (
    <button
      type="submit"
      className="bg-bgBtn  self-center rounded-md px-8 py-2  w-72 hover:w-full transition-all  tracking-[3px] hover:tracking-normal shadow-xl hover:shadow-md hover:bg-bgBtnHover dark:bg-addBtn dark:text-bgBtn"
    >
      Add To List
    </button>
  );
};

export default AddToList;

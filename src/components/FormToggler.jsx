import React from "react";
import { addIcon, removeIcon } from "../assets/images";

const FormToggler = ({ formToggler, setFormToggler }) => {
  return (
    <div>
      <button
        onClick={() => {
          setFormToggler((val) => !val);
        }}
        className="sm:hidden text-3xl absolute bottom-10  right-10 bg-addBtn  text-bgBtn leading-none rounded-full p-4 flex  justify-center items-center "
      >
        <img
          src={formToggler ? removeIcon : addIcon}
          className=" h-10 w-10 "
          alt=""
        />
      </button>
    </div>
  );
};

export default FormToggler;

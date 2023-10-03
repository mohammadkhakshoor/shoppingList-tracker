import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import {
  searchIcon,
  filterIcon,
  sortIcon,
  searchIconDark,
  filterIconDark,
  sortIconDark,
} from "../assets/images";

const FilterProducts = ({
  setFilterTerm,
  setSortBy,
  typesOfProducts,
  setFilterBy,
  toggleTheme,
}) => {
  return (
    <Formik
      initialValues={{ filterTerm: "", sortBy: "" }}
      onSubmit={(values) => {
        console.log(values.filterTerm);
      }}
    >
      {(props) => (
        <Form>
          <div className="flex   justify-center  lg:p-5 lg:gap-9 max-lg:gap-x-6 max-lg:gap-y-2  max-sm:grid max-sm:grid-cols-2  ">
            <div className=" col-span-2  max-sm:self-center flex max-sm:justify-self-auto max-sm:w-[90%] max-sm:mr-auto max-sm:ml-auto">
              <label className=" " htmlFor="filterTerm">
                <img
                  className=" h-8  w-8"
                  src={toggleTheme ? searchIconDark : searchIcon}
                  alt="search icon"
                />
              </label>
              <Field
                className="input w-full"
                type="text"
                name="filterTerm"
                onChange={(e) => {
                  props.handleChange(e);
                  setFilterTerm(e.target.value);
                }}
              />
              <ErrorMessage name="filterTerm" />
            </div>
            <div className="flex items-center lg:gap-1 max-lg:gap-[2px] max-sm:justify-self-center">
              <label className="  lg:font-black  " htmlFor="FilterBy">
                <img
                  className=" h-6  w-6 "
                  src={toggleTheme ? filterIconDark : filterIcon}
                  alt="filter icon"
                />
              </label>
              <Field
                className="input flex-shrink"
                as="select"
                name="FilterBy"
                onChange={(e) => {
                  props.handleChange(e);
                  setFilterBy(e.target.value);
                }}
              >
                <option value="nothing">No filtering</option>
                {typesOfProducts.map((type) => {
                  return (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  );
                })}
              </Field>
              {/* <ErrorMessage name="filterTerm" /> */}
              {/* <button type="submit">sub</button> */}
            </div>
            <div className="flex items-center lg:gap-1 max-lg:gap-[2px] max-sm:justify-self-center">
              <label className=" lg:font-black " htmlFor="sortBy">
                <img
                  className=" h-6  w-6 block"
                  src={toggleTheme ? sortIconDark : sortIcon}
                  alt="sort icon"
                />
              </label>
              <Field
                className="input"
                as="select"
                name="sortBy"
                onChange={(e) => {
                  props.handleChange(e);
                  setSortBy(e.target.value);
                }}
              >
                <option value="No">No sorting</option>
                <option value="Amount">Amount</option>
                <option value="Price">Price</option>
              </Field>
              {/* <ErrorMessage name="filterTerm" /> */}
              {/* <button type="submit">sub</button> */}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FilterProducts;

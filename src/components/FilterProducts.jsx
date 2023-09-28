import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const FilterProducts = ({
  setFilterTerm,
  setSortBy,
  typesOfProducts,
  setFilterBy,
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
          <div className="flex  justify-center  lg:p-5 lg:gap-9 max-lg:gap-2 items-center max-sm:grid max-sm:grid-cols-2 max-sm:justify-items-center">
            <div className=" col-span-2  max-sm:self-center">
              <label className=" font-black mr-2" htmlFor="filterTerm">
                Filter by name:
              </label>
              <Field
                className="input"
                type="text"
                name="filterTerm"
                onChange={(e) => {
                  props.handleChange(e);
                  setFilterTerm(e.target.value);
                }}
              />
              <ErrorMessage name="filterTerm" />
            </div>
            <div className="flex items-center gap-1">
              <label className="  lg:font-black lg:mr-2 " htmlFor="FilterBy">
                Filter by
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
            <div className="flex items-center gap-1">
              <label className=" lg:font-black lg:mr-2" htmlFor="sortBy">
                Sort by
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

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
          <div className="flex  justify-center gap-9">
            <div>
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
            <div>
              <label className=" font-black mr-2" htmlFor="FilterBy">
                Filter by :
              </label>
              <Field
                className="input"
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
            <div>
              <label className=" font-black mr-2" htmlFor="sortBy">
                Sort by :
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

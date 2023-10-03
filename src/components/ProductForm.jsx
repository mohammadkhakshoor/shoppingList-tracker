import React, { useEffect, useState } from "react";
import AddToList from "./AddToList";
import { validation } from "./validationSchema";
import { Formik, Field, Form, ErrorMessage } from "formik";
import GithubRepo from "./GithubRepo";
import useCheckWindowResize from "../Hooks/useCheckWindowResize";

function ProductForm({ items, setItems, productCategories, setFormToggler }) {
  const { width, setScreenSize } = useCheckWindowResize();
  function onSubmit(values, actions) {
    actions.resetForm();
    width <= 640 && setFormToggler(false);
    return setItems((item) => [
      ...item,
      {
        productName: values.productName.toLowerCase(),
        productType: values.productType,
        amount: values.amount,
        price: values.price,
        needFridge: values.needFridge,
        id: items.length + 1,
      },
    ]);
  }

  // const { values, errors, touched, handleBlur, handleChange, submitForm } =
  //   useFormik({
  //     initialValues: {
  // productName: "",
  // amount: "",
  // price: "",
  //     },
  //     validationSchema: validation,
  //     onSubmit,
  //   });

  return (
    <div className="flex flex-col gap-3   ">
      <Formik
        initialValues={{
          productName: "",
          amount: "",
          price: "",
          productType: "",
          needFridge: "",
        }}
        validationSchema={validation}
        onSubmit={onSubmit}
      >
        {(props) => (
          <div className="form-style glassmorphism  relative  ">
            {/* <GithubRepo /> */}
            <Form className="flex flex-col gap-4   ">
              <div className="flex lg:gap-4 max-lg:gap-x-2 max-lg:gap-y-2 max-lg:grid max-lg:grid-cols-3  ">
                <div className="flex flex-col col-span-2">
                  <label
                    className=" font-black leading-none mb-[5px]"
                    htmlFor="productName"
                  >
                    product name
                  </label>
                  <Field className="input" name="productName" type="text" />
                  <ErrorMessage name="productName" />
                </div>
                <div className="flex flex-col">
                  <label
                    className=" font-black leading-none mb-[5px]"
                    htmlFor="productType"
                  >
                    type
                  </label>
                  <Field className="input" name="productType" as="select">
                    <option value="" disabled>
                      Product type
                    </option>
                    {productCategories.map((type) => {
                      return (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      );
                    })}
                  </Field>
                  <ErrorMessage name="productType" />
                </div>
                <div className="flex flex-col">
                  <label
                    className=" font-black leading-none mb-[5px]"
                    htmlFor="amount"
                  >
                    Amount
                  </label>
                  <Field className="input" name="amount" type="text" />
                  <ErrorMessage name="amount" />
                </div>
                <div className="flex flex-col">
                  <label
                    className=" font-black leading-none mb-[5px]"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <Field className="input" name="price" type="text" />
                  <ErrorMessage name="price" />
                </div>
                <div className="flex flex-col">
                  <label
                    className=" font-black leading-none mb-[5px]"
                    htmlFor="needFridge"
                  >
                    need fridge
                  </label>
                  <Field className="input" name="needFridge" as="select">
                    <option value="" disabled>
                      choose one
                    </option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </Field>
                  <ErrorMessage name="needFridge" />
                </div>
              </div>

              {/* <button type="submit">Submit</button> */}
              <AddToList />
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ProductForm;

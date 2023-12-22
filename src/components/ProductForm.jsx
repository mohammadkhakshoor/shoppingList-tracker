import React, { useEffect, useState } from "react";
import AddToList from "./AddToList";
import { validation } from "./validationSchema";
import { Formik, Field, Form, ErrorMessage } from "formik";
import GithubRepo from "./GithubRepo";
import useCheckWindowResize from "../Hooks/useCheckWindowResize";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

function ProductForm({ items, setItems, productCategories, setFormToggler }) {
  const { t } = useTranslation();
  const { width, setScreenSize } = useCheckWindowResize();
  function onSubmit(values, actions) {
    actions.resetForm();
    width <= 640 && setFormToggler(false);
    return setItems((item) => [
      {
        productName: values.productName.toLowerCase(),
        productType: values.productType,
        amount: values.amount,
        price: values.price,
        needFridge: values.needFridge,
        id: crypto.randomUUID(),
      },
      ...item,
    ]);
  }

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
        {
          <div className="form-style glassmorphism  relative  ">
            {/* <GithubRepo /> */}
            <Form className="flex flex-col gap-4   ">
              <div className="flex lg:gap-4 max-lg:gap-x-2 max-lg:gap-y-2 max-lg:grid max-lg:grid-cols-3  ">
                <div className="flex flex-col col-span-2">
                  <label className=" font-black leading-none mb-[5px]" htmlFor="productName">
                    {t("productName")}
                  </label>
                  <Field className="input" name="productName" type="text" />
                  <ErrorMessage name="productName" />
                </div>
                <div className="flex flex-col">
                  <label className=" font-black leading-none mb-[5px]" htmlFor="productType">
                    {t("type")}
                  </label>
                  <Field className="input" name="productType" as="select">
                    <option value="" disabled>
                      {t("productType")}
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
                  <label className=" font-black leading-none mb-[5px]" htmlFor="amount">
                    {t("amount")}
                  </label>
                  <Field className="input" name="amount" type="text" />
                  <ErrorMessage name="amount" />
                </div>
                <div className="flex flex-col">
                  <label className=" font-black leading-none mb-[5px]" htmlFor="price">
                    {t("price")}
                  </label>
                  <Field className="input" name="price" type="text" />
                  <ErrorMessage name="price" />
                </div>
                <div className="flex flex-col">
                  <label className=" font-black leading-none mb-[5px]" htmlFor="needFridge">
                    {t("needFridge")}
                  </label>
                  <Field className="input" name="needFridge" as="select">
                    <option value="" disabled>
                      {t("needFridgeChoose")}
                    </option>
                    <option value="No">{t("no")}</option>
                    <option value="Yes">{t("yes")}</option>
                  </Field>
                  <ErrorMessage name="needFridge" />
                </div>
                <div className="flex flex-col">
                  <label className=" font-black leading-none mb-[5px]" htmlFor="needFridge">
                    {t("language")}
                  </label>
                  <Field
                    className="input"
                    name="language"
                    as="select"
                    onChange={(e) => {
                      i18n.changeLanguage(e.target.value);
                      e.target.value === "fa" ? (document.body.dir = "rtl") : (document.body.dir = "lrt");
                    }}
                  >
                    <option value="en"> {t("english")}</option>
                    <option value="fa"> {t("persian")}</option>
                  </Field>
                </div>
              </div>

              <AddToList />
            </Form>
          </div>
        }
      </Formik>
    </div>
  );
}

export default ProductForm;

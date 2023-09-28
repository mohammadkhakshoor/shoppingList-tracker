import * as yup from "yup";
export const validation = yup.object().shape({
  productName: yup
    .string()
    .max(20, "it is too long!")
    .matches(/^[a-zA-Z\s]+$/, {
      message: "⛔ you need to type only english letters",
    })
    .required("⛔ insert the product name"),
  amount: yup
    .number()
    .typeError("⛔ Only type number")
    .max(14, "⛔ it should be less than 15")
    .positive()
    .integer()
    .required("⛔ Required !"),
  price: yup
    .number()
    .typeError("⛔ Only type number")
    .positive()
    .integer()
    .required("⛔ Required !"),
  productType: yup
    .string()
    .oneOf(
      ["Fruit", "Beverages", "Frozen", "Household", "Care"],
      "invalid product type"
    )
    .required("⛔ Required !"),
  needFridge: yup.string().required("⛔ Required !"),
});

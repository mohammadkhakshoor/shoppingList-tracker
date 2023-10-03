import * as yup from "yup";
export const validation = yup.object().shape({
  productName: yup
    .string()
    .max(18, "⛔ it is too long!")
    .matches(/^[a-zA-Z\s]+$/, {
      message: "⛔ you need to type only english letters",
    })
    .required("⛔ insert the product name"),
  amount: yup
    .number()
    .typeError("⛔ Only type number")
    .max(9999, "⛔ Invalid amount")
    .positive()
    .integer()
    .required("⛔ Required !"),
  price: yup
    .number()
    .typeError("⛔ Only type number")
    .max(999999, "⛔ Invalid price")
    .positive()
    .integer()
    .required("⛔ Required !"),
  productType: yup
    .string()
    .oneOf(
      [
        "Food and Beverages",
        "Clothing",
        "Health",
        "Home & Housing",
        "Transportation",
        "Technology",
        "Entertainment",
        "Educational",
        "Care & Beauty",
      ],
      "invalid product type"
    )
    .required("⛔ Required !"),
  needFridge: yup.string().required("⛔ Required !"),
});

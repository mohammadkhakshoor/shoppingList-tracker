import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductShowCard from "./components/ProductShowCard";
import FilterProducts from "./components/FilterProducts";
import FormToggler from "./components/FormToggler";
import useCheckWindowResize from "./Hooks/useCheckWindowResize";
import ThemeSwitcher from "./components/ThemeSwitcher";

const productCategories = [
  "Food and Beverages",
  "Clothing",
  "Health",
  "Home & Housing",
  "Transportation",
  "Technology",
  "Entertainment",
  "Educational",
  "Care & Beauty",
];

// const x = [
//   {
//     productName: "apple",
//     amount: "5",
//     price: "25",
//     productType: "Fruit",
//     needFridge: "no",
//     id: "1",
//   },
//   {
//     productName: "soda",
//     amount: "3",
//     price: "10",
//     productType: "Beverages",
//     needFridge: "no",
//     id: "2",
//   },
//   {
//     productName: "frozen pizza",
//     amount: "1",
//     price: "50",
//     productType: "Frozen",
//     needFridge: "no",
//     id: "3",
//   },
//   {
//     productName: "cleaning supplies",
//     amount: "10",
//     price: "75",
//     productType: "Household",
//     needFridge: "yes",
//     id: "4",
//   },
//   {
//     productName: "running shoes",
//     amount: "2",
//     price: "30",
//     productType: "Care",
//     needFridge: "no",
//     id: "5",
//   },
//   {
//     productName: "action figure",
//     amount: "4",
//     price: "15",
//     productType: "Household",
//     needFridge: "no",
//     id: "6",
//   },
//   {
//     productName: "sofa",
//     amount: "1",
//     price: "200",
//     productType: "Household",
//     needFridge: "no",
//     id: "7",
//   },
//   {
//     productName: "hammer",
//     amount: "7",
//     price: "45",
//     productType: "Household",
//     needFridge: "no",
//     id: "8",
//   },
//   {
//     productName: "t-shirt",
//     amount: "3",
//     price: "40",
//     productType: "Care",
//     needFridge: "no",
//     id: "9",
//   },
//   {
//     productName: "cookware set",
//     amount: "2",
//     price: "35",
//     productType: "Household",
//     needFridge: "no",
//     id: "10",
//   },
// ];

export default function App() {
  // const [items, setItems] = useState(x); ////////////// ** here you can use x as testing values
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const { width } = useCheckWindowResize();
  const [filterTerm, setFilterTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("nothing");
  const [toggleTheme, setToggleTheme] = useState(false);
  const [formToggler, setFormToggler] = useState(width > 640 ? true : false);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className=" flex flex-col gap-4 lg:p-5  p-3   dvh  transition-all  duration-500 bg-cover bg-fixed overflow-hidden bg-lightMode dark:bg-darkMode font-inter  dark:text-slate-300   ">
        <div
          className={
            formToggler
              ? `${
                  width > 640 ? "" : "h-[14rem]"
                }  overflow-visible transition-all  ease-out  `
              : " ease-out  duration-700 h-0 overflow-hidden transition-all "
          }
        >
          <ProductForm
            items={items}
            setItems={setItems}
            productCategories={productCategories}
            setFormToggler={setFormToggler}
          />
        </div>
        <div className="glassmorphism  lg:sp-4 max-lg:p-2 rounded-md   ">
          <FilterProducts
            setFilterTerm={setFilterTerm}
            setSortBy={setSortBy}
            setFilterBy={setFilterBy}
            productCategories={productCategories}
            toggleTheme={toggleTheme}
          />
        </div>
        <div className=" flex gap-5 flex-wrap justify-center overflow-y-scroll scrollbar-hide   p-2 lg:p-10 ">
          <ProductShowCard
            items={items}
            setItems={setItems}
            filterTerm={filterTerm}
            sortBy={sortBy}
            filterBy={filterBy}
          />
        </div>
        <FormToggler
          formToggler={formToggler}
          setFormToggler={setFormToggler}
        />
        <ThemeSwitcher
          toggleTheme={toggleTheme}
          setToggleTheme={setToggleTheme}
        />
      </div>
    </>
  );
}

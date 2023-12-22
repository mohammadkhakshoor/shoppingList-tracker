import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductShowCard from "./components/ProductShowCard";
import FilterProducts from "./components/FilterProducts";
import FormToggler from "./components/FormToggler";
import useCheckWindowResize from "./Hooks/useCheckWindowResize";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./i18n";
import { useTranslation } from "react-i18next";

// const productCategories = [
//   "Food & Drink",
//   "Clothing",
//   "Health",
//   "Home & Housing",
//   "Transportation",
//   "Technology",
//   "Entertainment",
//   "Educational",
//   "Care & Beauty",
// ];

export default function App() {
  const { t } = useTranslation();
  const productCategories = t("productCategories", { returnObjects: true });
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("items")) || []);
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
      <div className=" flex flex-col gap-4 lg:p-5  p-3   dvh  transition-all  duration-500 bg-cover bg-fixed overflow-hidden bg-lightMode dark:bg-darkMode   dark:text-slate-300   ">
        <div
          className={
            formToggler
              ? `${width > 640 ? "" : "h-[14rem]"}  overflow-visible transition-all  ease-out  `
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
        <FormToggler formToggler={formToggler} setFormToggler={setFormToggler} />
        <ThemeSwitcher toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
      </div>
    </>
  );
}

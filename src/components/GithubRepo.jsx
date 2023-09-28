import { github } from "../assets/images";
const GithubRepo = () => {
  return (
    <div className=" absolute left-9 top-9 flex flex-col  items-center gap-1">
      <a
        href="https://github.com/mohammadkhakshoor/shoppingList-tracker"
        target="_blank"
        className="hover:bg-red-300 transition-all duration-400 rounded-full hover:translate-y-[-3px]"
      >
        <img src={github} alt="SVG Icon" />
      </a>
      <p className="text-center font-mono leading-3 ">
        github <br /> repo
      </p>
    </div>
  );
};

export default GithubRepo;

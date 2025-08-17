import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { valueFromSearch } from "../features/inputValues/inputValueSlice";

library.add(fas, far, fab);

export default function InputText() {
  const dispatch = useDispatch();

  return (
    <label
      htmlFor="search"
      className="w-fit flex gap-2.5 items-center text-black dark:text-white py-1.5 px-2.5 bg-white dark:bg-[#2b3945] rounded shadow-2xl transition-all duration-300 ease-in-out"
    >
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        id="search"
        placeholder="Search for a country..."
        className="focus:outline-0 px-2.5 py-2.5 t text-black dark:text-white placeholder:text-black dark:placeholder:text-white transition-all duration-300 ease-in-out"
        onKeyUp={(e) => dispatch(valueFromSearch(e.currentTarget.value))}
      />
    </label>
  );
}

import { useSelector, useDispatch } from "react-redux";
import { valueFromSelect } from "../features/inputValues/inputValueSlice";


export default function Dropdown() {
  const region = useSelector((state) => state.inputValue.selectedRegion);
  const dispatch = useDispatch();

  return (
    <div className="max-w-52  bg-white dark:bg-[#2b3945]">
      <select
        value={region}
        onChange={(e) => dispatch(valueFromSelect(e.currentTarget.value))}
        name="regions"
        id="regions"
        className="w-full px-5 py-2.5 shadow-2xl drop-shadow-xs text-black dark:text-white bg-inherit border-none rounded focus:outline-none block cursor-pointer"
      >
        <option className="" value={null} hidden>
          Filter by region
        </option>
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

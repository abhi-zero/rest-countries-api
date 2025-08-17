import { Dropdown, InputText, Card } from "../components";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();

  const data = useSelector((state) => state.countries.allCountries);
  const status = useSelector((state) => state.countries.status);
  const error = useSelector((state) => state.countries.error);
  console.log(data, status, error);

  if (status === "idle") {
    return (
      <div className="max-w-5xl m-auto ">
        <div className="flex justify-between flex-wrap gap-2.5 mt-8 px-5">
          <InputText />
          <Dropdown />
        </div>
        <div className=" cards h-[40rem] overflow-y-scroll max-w-fit  m-auto mt-12">
          <h1 className="text-2xl font-bold text-black dark:text-white transition-all duration-300 ease-in-out">
            Loading...
          </h1>
        </div>
      </div>
    );
  } else if (status === "failed") {
    return (
      <div className="max-w-5xl m-auto ">
        <div className="flex justify-between flex-wrap gap-2.5 mt-8 px-5">
          <InputText />
          <Dropdown />
        </div>
        <div className="cards h-[40rem] max-w-fit flex items-center m-auto mt-12">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 transition-all duration-300 ease-in-out">
            Somthing went wrong please refresh
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl m-auto ">
        <div className="flex justify-between flex-wrap gap-2.5 mt-8 px-5">
          <InputText />
          <Dropdown />
        </div>
        <div className=" cards h-[47rem] overflow-y-scroll max-w-fit flex flex-wrap justify-center-safe gap-5 m-auto mt-12 ">
          {data.map((country) => (
            <div key={country.name} className="cursor-pointer">
              <Card
                countryName={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital ? country.capital : "-- --"}
                imgUrl={country.flags.svg}
                onClick={() => {
                  navigate(`/country/${country.name}`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

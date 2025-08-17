import { useEffect } from "react";
import { Backbtn, CountryDetails, Flag } from "../components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Country() {
  const { countryName } = useParams();

  const allCountries = useSelector((state) => state.countries.allCountries);

  const country = allCountries.find((con) => con.name === countryName);

  useEffect(() => {
    console.log("Param:", countryName, "Country:", country);
  }, [countryName, country]);

  // Guard against undefined
  if (!country) {
    return (
      <div className="max-w-5xl m-auto">
      <div className="py-5">
        <Backbtn />
      </div>
      <div className="flex justify-between">
        <p>Loading country details...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-5xl m-auto h-[45rem]">
      <div className="py-5">
        <Backbtn />
      </div>
      <div className="h-full flex justify-between items-center-safe">
        <Flag imgUrl={country.flag} />
        <CountryDetails
          countryName={country.name ? country.name : "-- --"}
          nativeName={country.nativeName ? country.nativeName : "-- --"}
          population={country.population ? country.population : "-- --"}
          region={country.region ? country.region : "-- --"}
          subRegion={country.subregion ? country.subregion : "-- --"}
          capital={country.capital ? country.capital : "-- --"}
          topLevelDomain={
            country.topLevelDomain ? country.topLevelDomain : ["-- --"]
          }
          currencies={
            country.currencies ? country.currencies : [{ name: "-- --" }]
          }
          languages={
            country.languages ? country.languages : [{ name: "-- --" }]
          }
          borders={country.borders ? country.borders : ["No border countries"]}
        />
      </div>
    </div>
  );
}

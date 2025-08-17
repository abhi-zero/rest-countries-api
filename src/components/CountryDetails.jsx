export default function CountryDetails({
  countryName,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders,
}) {
  return (
    <div className="w-[30rem] h-[20rem] flex flex-col gap-16 p-2.5 text-black dark:text-white transition-all duration-300 ease-in-out">
      <div className="flex flex-col gap-7 ">
        <h1 className="text-2xl font-bold text-black dark:text-white transition-all duration-300 ease-in-out">{countryName}</h1>
        <div className="flex justify-between gap-5">
          <div className="max-w-60  ">
            <p className="text-[.875rem] text-black dark:text-white transition-all duration-400 ease-in-out">
              <span className="text-nowrap">Native Name:</span>{" "}
              <span className="text-wrap text-[#808080] dark:text-[#9e9d9d]">{nativeName}</span>
            </p>
            <p className="text-[.875rem] text-black dark:text-white transition-all duration-500 ease-in-out">
              <span className="text-nowrap">Population:</span>{" "}
              <span className="text-wrap text-[#808080] dark:text-[#9e9d9d]">{population}</span>
            </p>
            <p className="text-[.875rem] text-black dark:text-white transition-all duration-600 ease-in-out">
              <span className="text-nowrap">Region:</span>{" "}
              <span className="text-wrap text-[#808080] dark:text-[#9e9d9d]">{region}</span>
            </p>
            <p className="text-[.875rem] text-black dark:text-white transition-all duration-700 ease-in-out">
              <span className="text-nowrap">Sub Region:</span>{" "}
              <span className="text-wrap text-[#808080] dark:text-[#9e9d9d]">{subRegion}</span>
            </p>
            <p className="text-[.875rem] text-black dark:text-white transition-all duration-800 ease-in-out">
              <span className="text-nowrap">Capital:</span>{" "}
              <span className="text-wrap text-[#808080] dark:text-[#9e9d9d]">{capital}</span>
            </p>
          </div>
          <div className="max-w-60">
            <div className="flex">
              <p className="text-[.875rem] text-nowrap text-black dark:text-white transition-all duration-400 ease-in-out ">Top Level Domain : </p>
              <div className="flex flex-wrap">
                {topLevelDomain.map((domain) => (
                  <span key={domain} className="text-[.875rem] text-wrap text-[#808080] dark:text-[#9e9d9d] transition-all duration-400 ease-in-out">
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex">
              <p className="text-[.875rem] text-nowrap text-black dark:text-white transition-all duration-500 ease-in-out">Currencies : </p>
              <div className="flex flex-wrap">
                {currencies.map((currency, index) => (
                  <span
                    key={currency.name}
                    className="text-[.875rem] text-wrap text-[#808080] dark:text-[#9e9d9d] transition-all duration-500 ease-in-out"
                  >
                    {currency.name} {++index !== currencies.length ? "," : null}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex">
              <p className="text-[.875rem] text-nowrap text-black dark:text-white transition-all duration-600 ease-in-out">Languages : </p>
              <div className="flex flex-wrap">
                {languages.map((language, index) => (
                  <span
                    key={language.name}
                    className="text-[.875rem] text-wrap text-[#808080] dark:text-[#9e9d9d] transition-all duration-600 ease-in-out"
                  >
                    {language.name}
                    {++index !== languages.length ? "," : null}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 items-center">
        <p className="text-[.875rem] text-nowrap text-black dark:text-white transition-all duration-900 ease-in-out">Borders :</p>
        <div className="flex flex-wrap gap-2 " >
           {borders.map((border) => (
                  <span
                    key={border}
                    className="text-[.875rem] text-wrap bg-white dark:bg-[#2b3945] text-black dark:text-white px-5 py-1 shadow transition-all duration-900 ease-in-out" 
                  >
                    {border}
                  </span>
                ))} 
        </div>
      </div>
    </div>
  );
}

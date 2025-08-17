import { fetchCountries } from "./features/countries/countriesSlice";
import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { useEffect } from "react";
import { toggleTheme } from "./features/theme/themeSlice";
import { useSelector,useDispatch } from "react-redux";

function App() {

  const search = useSelector((state) => state.inputValue.searchValue);
  const region = useSelector((state) => state.inputValue.selectedRegion);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleTheme());
  }, []);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch, search, region]);
  

  return (
    <div className="h-screen bg-gray-50 dark:bg-[#202c37]">
      <Header />
      <main >
        <Outlet />
      </main>
    </div>
  );
}

export default App;

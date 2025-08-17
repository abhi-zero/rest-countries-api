import { useEffect, useState } from "react";
import ThemeBtn from "./ThemeBtn";

export default function Header() {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)


    useEffect(()=> {
        const handleResize = () => {
            setIsDesktop (window.innerWidth > 768) 
        }

        window.addEventListener('resize', handleResize);
        return ()=> window.removeEventListener('resize',handleResize)
    },[])

  return (
    <header className="bg-white dark:bg-[#2b3945] h-17 px-5 border-gray-700 border-b -1 transition-all duration-300 ease-in">
      <div className="h-full flex justify-between items-center m-auto max-w-5xl text-black dark:text-white">
        <h1 className={`font-bold ${isDesktop ? "text-[1.5rem]" : "text-[1.125rem]"}`}>Where in the world?</h1>
        <ThemeBtn 
        textSize={isDesktop ? "text-[1rem]" : "text-[0.875rem]"}
        />
      </div>
    </header>
  );
}

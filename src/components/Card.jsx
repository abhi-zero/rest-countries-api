


export default function Card({
    countryName,
    population,
    region,
    capital,
    imgUrl,
    onClick,
    ...props
}){


    return( 
        <div 
        onClick={onClick}
        className="w-58 h-80 bg-white dark:bg-[#2b3945] text-black dark:text-white rounded overflow-hidden shadow-2xl transition-all duration-300 ease-in-out" >
            <div className="h-41 w-full ">
                <img className="object-cover h-41 w-full" src={imgUrl} alt={countryName} />
            </div>
            <div className="p-5">
                <h2 className="font-bold tracking-wide text-ellipsis overflow-hidden text-nowrap ">{countryName}</h2>
                <div className=" flex flex-col mt-2 transition-all duration-300 ease-in-out">
                    <p className="text-ellipsis overflow-hidden text-nowrap "><span className=" text-black dark:text-white transition-all duration-300 ease-in-out">Population:</span> <span className="text-[#5e5c5c] dark:text-[#a7a6a6]    transition-all duration-300 ease-in-out">{population}</span></p>
                    <p className="text-ellipsis overflow-hidden text-nowrap "><span className=" text-black dark:text-white transition-all duration-300 ease-in-out" >Region:</span> <span className="text-[#5e5c5c] dark:text-[#a7a6a6] text-ellipsis overflow-hidden text-nowrap   transition-all duration-300 ease-in-out">{region}</span></p>
                    <p className="text-ellipsis overflow-hidden text-nowrap "><span className=" text-black dark:text-white transition-all duration-300 ease-in-out">Capital:</span> <span className="text-[#5e5c5c] dark:text-[#a7a6a6]  transition-all duration-300 ease-in-out">{capital}</span></p>
                </div>
            </div>

        </div>
    )
}
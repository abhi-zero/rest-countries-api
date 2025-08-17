import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { valueFromSearch } from "../features/inputValues/inputValueSlice";


export default function Backbtn(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    return(
        <button
        onClick={()=> {
            dispatch(valueFromSearch(null))
            navigate('/')
        }}
        className="bg-gray-200 dark:bg-[#2b3945] text-black dark:text-white px-7 py-2 rounded shadow-2xl hover:shadow-cyan-600 transition-all duration-300 ease-in-out cursor-pointer"
        >
            <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
    )
}
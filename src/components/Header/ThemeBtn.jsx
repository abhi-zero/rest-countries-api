import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import {useDispatch} from 'react-redux'
import { toggleTheme } from '../../features/theme/themeSlice'



export default function ThemeBtn({
    textSize
}){
const dispatch = useDispatch()

    return(
        <button 
        className={`border-none cursor-pointer px-2.5 py-1.5 rounded-2xl text-black  hover:text-white hover:bg-black dark:text-white dark:hover:text-black dark:hover:bg-white transition-all duration-300 ease-in ${textSize}`}
        onClick={()=>{dispatch(toggleTheme())}}
        > 
           <FontAwesomeIcon icon={faMoon} /> Darkmode
        </button>
    )
}
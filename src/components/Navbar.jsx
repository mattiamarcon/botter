import Headroom from "react-headroom";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarElements from "./NavbarElements";
import { motion } from "framer-motion"

export default function Navbar(){

    const [logo,setLogo]=useState("burger.svg");
    const [isVisible, setIsVisible] = useState(false);

    const show = {
        opacity: 1,
        display: "block"
    };
      
    const hide = {
        opacity: 0,
        transitionEnd: {
            display: "none"
        }
    };

    function changeLogo(){
        setIsVisible(!isVisible)
        document.getElementById("navbarElements").classList.toggle("hidden");

        if(logo==="burger.svg"){
            setLogo("close.svg"); 
        }   
        else{
            setLogo("burger.svg");
        }
    }

    return (
        <Headroom className="text-white text-2xl font-medium w-full mb-3 ">
            <nav className="h-24 flex flex-row justify-between z-20 cursor-pointer relative bg-blue-900 ">
                <Link to={"/"} className="md:mx-auto ml-8 my-auto"><img src="logo.png" alt="" className="h-9" /></Link>
                <img src={logo} alt="" className="md:hidden p-4" onClick={changeLogo} />
                <ul className="md:w-3/4 md:flex md:flex-row md:justify-evenly items-center hidden">
                    <NavbarElements />
                </ul>
            </nav>
            <motion.ul id="navbarElements" className="items-center absolute w-full bg-blue-900 flex-col md:hidden" animate={isVisible ? show : hide} >
                <NavbarElements />
            </motion.ul>
        </Headroom>
    );
}
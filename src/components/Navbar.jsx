import Headroom from "react-headroom";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarElements from "./NavbarElements";

export default function Navbar(){

    const [logo,setLogo]=useState("burger.svg");

    function changeLogo(){
        if(logo==="burger.svg")
            setLogo("close.svg");
        else
            setLogo("burger.svg");

        document.getElementById("navbarElements").classList.toggle("hidden");
    }

    return (
        <Headroom className="text-white text-2xl font-medium w-full mb-3 ">
            <nav className="h-24 flex flex-row justify-between z-20 cursor-pointer relative bg-blue-900 ">
                <Link to={"/"} className="md:mx-auto ml-8 my-auto"><img src="logo.png" alt="" className="h-9" /></Link>
                <img src={logo} alt="" className="md:hidden p-4" onClick={changeLogo} />
                <ul className="md:w-4/5 md:flex md:flex-row md:justify-evenly items-center hidden">
                    <NavbarElements />
                </ul>
            </nav>
            <ul id="navbarElements" className="flex items-center hidden absolute w-full bg-blue-900 flex-col md:hidden">
                <NavbarElements />
            </ul>
        </Headroom>
    );
}
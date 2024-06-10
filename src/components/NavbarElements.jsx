import { Link } from "react-router-dom";
import { motion } from "framer-motion"

export default function NavbarElements(){
    return(
        <>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="hover:bg-blue-800 w-full p-1 text-center md:hover:bg-blue-900 hover:text-black"><Link to={"/"} className="mx-auto">HOME</Link></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="hover:bg-blue-800 w-full p-1 text-center md:hover:bg-blue-900 hover:text-black"><Link to={"/azienda"} className="mx-auto">AZIENDA</Link></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="hover:bg-blue-800 w-full p-1 text-center md:hover:bg-blue-900 hover:text-black"><Link to={"/servizi"} className="mx-auto">SERVIZI</Link></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="hover:bg-blue-800 w-full p-1 text-center md:hover:bg-blue-900 hover:text-black"><Link to={"/orari"} className="mx-auto">ORARI</Link></motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}} className="hover:bg-blue-800 w-full p-1 text-center md:hover:bg-blue-900 hover:text-black"><Link to={"/contatti"} className="mx-auto">CONTATTI</Link></motion.li>
        </>
    );
}
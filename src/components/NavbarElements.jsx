import { Link } from "react-router-dom";

export default function NavbarElements(){
    return(
        <>
            <li className="hover:bg-blue-700 w-full p-3 text-center md:hover:bg-blue-800 hover:text-black"><Link to={"/servizi"} className="mx-auto">SERVIZI</Link></li>
            <li className="hover:bg-blue-700 w-full p-3 text-center md:hover:bg-blue-800 hover:text-black"><Link to={"/prenotazioni"} className="mx-auto">PRENOTAZIONI</Link></li>
            <li className="hover:bg-blue-700 w-full p-3 text-center md:hover:bg-blue-800 hover:text-black"><Link to={"/contatti"} className="mx-auto">CONTATTI</Link></li>
            <li className="hover:bg-blue-700 w-full p-3 text-center md:hover:bg-blue-800 hover:text-black"><Link to={"/auto"} className="mx-auto">AUTO</Link></li>
        </>
    );
}
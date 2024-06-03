import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-blue-800 text-gray-400 text-center w-full p-5 text-2xl mt-6 flex flex-col">
            <p className="text-4xl underline underline-offset-4 my-2">Botter F.lli Automobili</p>
            <a href="https://maps.app.goo.gl/LAS2pnezVSpGX6U49" className="my-2 cursor-pointer hover:text-black">Via Postumia Di Camino, 29/B</a>
            <p className="my-2">21046 Oderzo (TV)</p>
            <a href="tel:+290422814090" className="my-2 cursor-pointer hover:text-black">0422 814090</a>
            <a href="mailto:info@botterautomobili.com" className="my-2 cursor-pointer hover:text-black">info@botterautomobili.com</a>
            <p className="my-2">P.IVA 01752260262</p>
            <div className="flex flex-row w-fit mx-auto my-2">
                <img src="facebook.svg" alt="" className="w-10"/>
                <a href="https://www.facebook.com/Botterautomobili/" className="text-black ml-5 cursor-pointer hover:text-black">Botterautomobili</a>
            </div>
        </footer>
    );
}



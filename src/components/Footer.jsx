import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <footer className="bg-blue-900 text-gray-400 text-center w-full p-5 text-xl mt-6 font-thin md:justify-evenly justify-center">
            <div className="flex flex-col md:flex-row justify-center">
                <div className="flex flex-col">
                    <p className="text-2xl underline underline-offset-4 my-1">Botter F.lli Automobili</p>
                    <a href="https://maps.app.goo.gl/LAS2pnezVSpGX6U49" className="my-1 cursor-pointer hover:text-black">Via Postumia Di Camino, 29/B</a>
                    <p className="my-1">21046 Oderzo (TV)</p>
                    <a href="tel:+390422814090" className="my-1 cursor-pointer hover:text-black">Telefono: 0422 814090</a>
                    <a href="mailto:info@botterautomobili.com" className="my-1 cursor-pointer hover:text-black">Email: info@botterautomobili.com</a>
                    <p className="">P.IVA 01752260262</p>
                    <div className="flex flex-row w-fit mx-auto">
                        <a href="https://www.facebook.com/Botterautomobili/" target="_blank" className="text-black  cursor-pointer my-auto"><img src="facebook.svg" alt="" className="h-12"/></a>
                        <a href="https://www.autoscout24.it/concessionari/f-lli-botter-automobili-snc#atype=C&cid=3829641&ustate=U,N,A&sort=price&results=20&page=1" target="_blank" className="text-black  cursor-pointer my-auto"><img src="autoscout.svg" alt="" className="ml-5 h-32"/></a>
                    </div>
                </div>
                <div className="md:ml-16 w-full md:w-2/5 flex flex-col">
                    <p className="text-2xl underline underline-offset-4 my-3 md:my-1">ORARI:</p>
                    <div className="w-full sm:w-3/5 md:w-full xl:w-2/3 lg:w-4/5 flex flex-col mx-auto">
                        <div className="w-full flex flex-row justify-between my-1 mx-auto px-3">
                            <p>Lunedì-Venerdì: </p>
                            <div className="flex flex-col ml-5">
                                <p>08:00 - 12:00</p>
                                <p>14:30 - 19:00</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between my-1 mx-auto px-3">
                            <p>Sabato: </p>
                            <div className="flex flex-col ml-5">
                                <p>08:00 - 12:00</p>
                                <p>15:00 - 18:00</p>
                            </div>
                        </div>
                        <div className="w-full flex flex-row justify-between my-1 mx-auto px-3">
                            <p>Domenica: </p>
                            <div className="flex flex-col ml-5">
                                <p>Chiuso</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="mt-2">Powered by passion</p>
        </footer>
    );
}



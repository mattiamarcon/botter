import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Servizi(){
    return(
        <>
            <Navbar />
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl text-center font-bold m-5">SERVIZI</motion.h1>
            <div className="text-center mx-auto w-3/4 lg:w-1/2 xl:w-1/2 p-3 my-5 text-2xl font-semibold">
                <motion.p className="my-4" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>I servizi alla clientela sono molteplici, tutti volti alla soddisfazione del cliente con tempistiche ridotte e massima professionalità.</motion.p>
            </div>

            <div className="flex flex-col lg:flex-row w-full">
                <img src="foto/omino.jpg" alt="" className="lg:w-2/5 p-5 mx-auto h-auto" />
                <div className="mx-auto w-3/4 lg:w-2/5 lg:px-16 lg:py-5 xl:py-0 my-5 text-xl flex flex-col justify-evenly lg:rounded-lg lg:border-2 lg:border-blue-900">
                    <h1 className="text-4xl text-center font-semibold mb-3">Vendita</h1>
                    <motion.ul className="list-disc" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
                        <li className="my-2">Ricerca vetture usate tutte marche non disponibili a stock</li>
                        <li className="my-2">Vetture a km zero e aziendali</li>
                        <li className="my-2">Vetture nuove</li>
                    </motion.ul>
                    <h1 className="text-4xl text-center font-semibold my-6">Servizi finanziari</h1>
                    <p>Sistemi rateali e leasing abbinati a servizi assicurativi esclusivi e personalizzati con:</p>
                    <motion.ul className="list-disc ml-16 lg:ml-20" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>
                        <li className="my-2">FCA bank</li>
                        <li className="my-2">Findomestic</li>
                        <li className="my-2">I. CAR</li>
                    </motion.ul>
                </div>
            </div>
            <img src="foto/operatore.jpg" alt="" className="md:w-3/4 lg:w-1/2 p-5 my-5 mx-auto h-auto" />
            <h1 className="text-4xl text-center font-semibold my-5">Assistenza e post-vendita</h1>
            <ul className="list-disc mx-auto w-3/4 lg:w-2/5 p-3 my-5 text-xl">
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Servizio ricambi a domicilio - per operatori</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Servizio manutenzione con pagamento rateale</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Servizio vendita e sostituzione pneumatici</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Revisione periodica</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Soccorso stradale</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Riprogrammazione centraline e ottimizzazione consumi</motion.li>
                    <motion.li initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="my-2">Servizi Lancia - Scopri tutti i servizi legati al mondo Lancia</motion.li>
                </ul>

            
            
            <Footer />
        </>
    );
}
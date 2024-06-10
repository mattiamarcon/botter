import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Azienda(){
    return(
        <>
            <Navbar />
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl text-center font-bold m-5">BOTTER AUTOMOBILI</motion.h1>
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl text-center font-semibold mb-3">dal 1984</motion.h1>
            <img src="foto/lanciaFlamina.jpg" alt="" className="lg:w-4/6 mx-auto h-auto" />
            <div className="text-center mx-auto w-3/4 lg:w-1/2 xl:w-1/2 p-3 my-5 text-2xl">
                <motion.p className="my-1" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>L'azienda Botter, rappresenta il marchio Lancia dal 1984.</motion.p>
                <motion.p className="my-1" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>La nostra famiglia vanta una lunga esperienza nel settore auto.</motion.p>
                <motion.p className="my-4" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>Una passione, quella dei motori, iniziata con nonno Angelo nel 1920 e tramandata di padre in figlio fino ad oggi.</motion.p>  
            </div>
            <img src="foto/lancia.jpg" alt="" className="md:w-5/6 lg:w-4/6 mx-auto h-auto mb-" />
            <div className="text-center mx-auto w-3/4 lg:w-1/2 xl:w-1/2 p-3 my-5 text-2xl">
                <motion.p className="my-4" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}}>L'accoglienza e la disponibilita' del personale di tutta l'azienda trasmette ai clienti la serenita' necessaria per scegliere con la piu' ampia liberta' e convinzione.</motion.p>
            </div>
            
            <Footer />
        </>
    );
}
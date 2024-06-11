import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Home(){
    return(
        <>
            <Navbar />
            <div className="md:relative">
                <div className="md:absolute z-10 md:mt-24 md:ml-20 md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl md:text-left text-center font-bold m-5 md:m-0">
                    <mark className="bg-transparent md:bg-white leading-tight">CONCESSIONARIA AUTOMOBILISTICA E OFFICINA SPECIALIZZATA</mark>
                    </motion.h1>  
                </div>
                <div className="h-56 sm:h-72 md:h-[600px]">
                    <Carousel leftControl={<MdArrowBackIosNew color="white" />} rightControl={<MdArrowForwardIos color="white" />} pauseOnHover>
                        <img src="foto/negozio.jpg" alt="..." />
                        <img src="foto/NegozioTreMacchine.jpg" alt="..." />
                        <img src="foto/lanciaIta.jpg" alt="..." />
                        <img src="foto/oldLancia.jpg" alt="..." />
                    </Carousel>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full lg:justify-evenly items-center my-5">
                <motion.p initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} transition={{duration:1}} className="text-center w-3/4 mx-auto text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold my-3 md:w-1/3 xl:w-1/6">
                    Il nostro pensiero è riassumibile in 3 parole: Professionalità, Serietà e Cortesia.
                </motion.p>
                <img src="foto/verticalLancia.jpg" alt="" className="h-96 md:h-fit md:w-1/3 my-3 mx-auto" />
            </div>
            <div className="w-full flex flex-col">
                <p className="text-center w-3/4 mx-auto text-3xl md:text-4xl xl:text-5xl font-semibold my-3">
                    Le nostre auto
                </p>
                <div className="w-1/2 sm:w-1/3 md:w-full lg:w-5/6 2xl:w-full flex flex-col md:flex-row justify-evenly flex-wrap mx-auto">
                    <motion.img src="logos/abarth.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 h-44 my-4 " />      
                    <motion.img src="logos/fiat.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 h-44 my-4" />
                    <motion.img src="logos/jeep.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 h-44 my-4 " />
                    <motion.img src="logos/lancia.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 md:w-fit h-44 my-4  " />
                    <motion.img src="logos/suzuki.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 md:w-fit h-44 my-4  " />
                    <motion.img src="logos/alfaromeo.png" initial={{opacity:0}} transition={{duration:2}} whileInView={{opacity:1}} className="md:h-52 h-44 my-4 bg-gray-600" />
                </div>
            </div>
            
            

            
            <Footer />
            
        </>
    )
}
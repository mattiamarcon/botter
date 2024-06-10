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
                    <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl md:text-left text-center font-bold m-5 md:m-0">
                       <mark className="inset-0 bg-white">CONCESSIONARIA AUTOMOBILISTICA E OFFICINA SPECIALIZZATA</mark>
                    </motion.h1>  
                </div>
                <div className="h-80 md:h-[600px] opacity-75">
                    <Carousel leftControl={<MdArrowBackIosNew color="white" />} rightControl={<MdArrowForwardIos color="white" />} pauseOnHover>
                        <img src="foto/negozio.jpg" alt="..." />
                        <img src="foto/NegozioTreMacchine.jpg" alt="..." />
                        <img src="foto/lanciaIta.jpg" alt="..." />
                        <img src="foto/oldLancia.jpg" alt="..." />
                    </Carousel>
                </div>
            </div>
            <Footer />
            
        </>
    )
}

/*
<motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl md:text-left text-center font-bold m-5 md:m-0">
                       <mark className=" bg-white">CONCESSIONARIA AUTOMOBILISTICA E OFFICINA SPECIALIZZATA</mark>
                    </motion.h1>  
*/
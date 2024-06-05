import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { motion } from "framer-motion"



export default function Contatti(){
    return (
        <>
            <Navbar />
            <motion.h1 initial={{opacity:0, y:-100}} whileInView={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl text-center font-bold m-5">CONTATTI</motion.h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.1563502879203!2d12.500944376620394!3d45.78809531176911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47795cd5d4132611%3A0xaa3ec32aa738b037!2sF.lli%20Botter%20Automobili!5e0!3m2!1sit!2sit!4v1717589735023!5m2!1sit!2sit" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[60vh]"></iframe>
            <motion.div className="flex flex-col md:flex-row justify-center text-center my-7 text-wrap" initial={{ opacity: 0, x:-50 }} whileInView={{opacity:1, x:0}} transition={{duration:1.5}}>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <FaMapMarkerAlt className="mb-6 lg:w-20 lg:h-20 sm:h-16 sm:w-16 w-12 h-12 mx-auto" />
                    <a href="https://maps.app.goo.gl/R3mp1xUT6vcz21zN8" className="text-2xl  hover:text-blue- cursor-pointer " target="_blank">Via Postumia Di Camino, 29/B </a>
                </div>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <FaPhone className="mb-6 lg:w-20 lg:h-20 sm:h-16 sm:w-16 w-12 h-12 mx-auto" />
                    <a href="tel:+390422814090" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 cursor-pointer">0422 814 090</a>
                </div>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <IoIosMail className="mb-6 lg:w-20 lg:h-20 sm:h-16 sm:w-16 w-12 h-12 mx-auto" />
                    <a href="mailto:info@botterautomobili.com" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 cursor-pointer">info@botterautomobili.com</a>
                </div>
                <div className="lg:w-1/4 flex flex-col md:h-56 justify-center my-5 mx-5 xl:mx-0">
                    <FaFacebookSquare className="mb-6 lg:w-20 lg:h-20 sm:h-16 sm:w-16 w-12 h-12 mx-auto" />
                    <a href="https://www.facebook.com/Botterautomobili/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500 cursor-pointer">Botterautomobili</a>
                </div>
            </motion.div>
            <Footer />
        </>
    );
}
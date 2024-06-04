import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Azienda(){
    return(
        <>
            <Navbar />
            <h1 className="text-6xl text-center font-bold m-5">BOTTER AUTOMOBILI</h1>
            <h1 className="text-4xl text-center font-semibold mb-3">dal 1984</h1>
            <img src="foto/lanciaFlamina.jpg" alt="" className="lg:w-4/6 mx-auto h-auto" />
            <div className="text-center mx-auto w-3/4 lg:w-1/2 xl:w-1/2 p-3 my-5 text-2xl">
                <p className="my-1">L'azienda Botter, rappresenta il marchio Lancia dal 1984.</p>
                <p className="my-1">La nostra famiglia vanta una lunga esperienza nel settore auto.</p>
                <p className="my-4">Una passione, quella dei motori, iniziata con nonno Angelo nel 1920 e tramandata di padre in figlio fino ad oggi.</p>
                <p className="my-4">L'accoglienza e la disponibilita' del personale di tutta l'azienda trasmette ai clienti la serenita' necessaria per scegliere con la piu' ampia liberta' e convinzione.</p>
            </div>
            <img src="foto/lancia.jpg" alt="" className="md:w-5/6 lg:w-4/6 mx-auto h-auto mb-" />
            <Footer />
        </>
    );
}
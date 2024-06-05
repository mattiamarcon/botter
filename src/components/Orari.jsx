import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Orari(){
    return (
        <>
            <Navbar />
            <h1 className="text-5xl text-center font-bold m-5">ORARI</h1>
            <div className="p-3 sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 mx-auto flex flex-col text-center text-2xl font-medium">
                <div className="w-full flex flex-row justify-between mx-auto my-5">
                    <p>Lunedì-Venerdì: </p>
                    <div className="flex flex-col ml-5">
                        <p>08:00 - 12:00</p>
                        <p>14:30 - 19:00</p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between mx-auto my5">
                    <p>Sabato: </p>
                    <div className="flex flex-col ml-5">
                        <p>08:00 - 12:00</p>
                        <p>15:00 - 18:00</p>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between mx-auto my-5 mb-14">
                    <p>Domenica: </p>
                    <div className="flex flex-col ml-5">
                        <p>Chiuso</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
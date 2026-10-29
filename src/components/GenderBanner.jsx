
import React from "react";

import festiveSale from "../assets/festive-sale.webp";

function GenderBanner() {
    return (
        <section className="w-full bg-white px-3 md:px-8 py-25">

            {/* Main Festive Sale Banner */}
            <div className="mx-auto max-w-[1700px] overflow-hidden">
                <img
                    src={festiveSale}
                    alt="Festive fashion sale"
                    className="block w-full h-auto object-cover cursor-pointer
                     transition-transform duration-300 hover:scale-[1.01]"
                />
            </div>

            <div className="bg-red-50 py-8">
                <div className="flex flex-col items-center text-center font-bold">
                    <div className="text-4xl md:text-[40px] text-[#142E8E] tracking-wide mb-2">
                        OMG! DEAL
                    </div>
                    <p className="text-4xl md:text-[40px] text-[#142E8E] tracking-wide">
                        BOLE TO DHAMAKEDAR DEAL
                    </p>
                </div>
            </div>



        </section>
    );
}

export default GenderBanner;

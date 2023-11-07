import React, { useState, useEffect } from "react";
import axios from "axios";
import { DolarData } from "@/interfaces/data";

const MoneyCarousel = () => {
    const [dolarData, setDolarData] = useState<DolarData>();

    useEffect(() => {
        const fetchDolarData = async () => {
            try {
                const response = await axios.get("https://criptoya.com/api/dolar");
                setDolarData(response.data);
            } catch (error) {
                console.error("Error fetching dolar data:", error);
            }
        };

        fetchDolarData();
    }, []);

    return (
        <div className="w-full space-y-8 relative">
            <div className="relative overflow-hidden w-full no-scrollbar py-12">
                {dolarData && (
                    <div className="animate-[right2left_20s_linear_infinite] whitespace-nowrap items-center flex">
                        <p className="font-gilroy font-black lg:text-[40px] uppercase text-black min-w-max mx-3 leading-none">
                            Oficial: {dolarData.oficial}
                        </p>
                        <p className="font-gilroy font-black lg:text-[40px] uppercase text-black min-w-max mx-3 leading-none">
                            Solidario: {dolarData.solidario}
                        </p>
                        <p className="font-gilroy font-black lg:text-[40px] uppercase text-black min-w-max mx-3 leading-none">
                            MEP: {dolarData.mep}
                        </p>
                        <p className="font-gilroy font-black lg:text-[40px] uppercase text-black min-w-max mx-3 leading-none">
                            CCL: {dolarData.ccl}
                        </p>
                        <p className="font-gilroy font-black lg:text-[40px] uppercase text-black min-w-max mx-3 leading-none">
                            Blue: {dolarData.blue}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoneyCarousel;

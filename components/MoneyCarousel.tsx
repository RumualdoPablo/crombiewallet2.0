import React from 'react'

const MoneyCarousel = () => {
    return (
        <div>
            <article className="w-full space-y-8 relative">
                <div className="flex gap-6">
                    <div className=" relative flex overflow-hidden w-full no-scrollbar">
                        <div className=" animate-[right2left_20s_linear_infinite] whitespace-nowrap items-center flex">
                            <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">Bitcoin</p>
                            <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">USDT</p>
                            <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">Peso Argentino</p>
                            <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">Dolar blue</p>
                            <p className="font-gilroy font-black text-[52px] lg:text-[80px] uppercase text-black min-w-max mx-3 leading-none">CrombieCoin</p>
                        </div>
                    </div>
                </div>
            </article></div>
    )
}

export default MoneyCarousel
"use client"

import { useTranslations } from "next-intl"
import hero from "@/public/hero.json"
import Lottie from "lottie-react"
import Cards from "@/components/LandingComponents/Cards"
import Brands from "@/components/Brands";
import Loader from "@/components/LoadingComponents/Loader";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //loader de 2 segundos
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    //limpia el temporizador cuando el componente corre
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  const t = useTranslations("index");


  const cardArray = [
    {
      id: 1,
      text: t("cards.1"),
      image: "./servicio-al-cliente.svg"
    }, {
      id: 2,
      text: t("cards.2"),
      image: "./estadisticas.svg"
    }, {
      id: 3,
      text: t("cards.3"),
      image: "./hucha.svg"
    }, {
      id: 4,
      text: t("cards.4"),
      image: "./finanzas.svg"
    }]

  return (
    <div className="flex min-h-screen flex-col items-center">
    {isLoading ? (
      <Loader /> // Muestra el cargador mientras isLoading sea verdadero
    ) : (
      <div>
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 
          xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold 
            tracking-tight leading-none md:text-5xl xl:text-6xl"
            >
              <strong>Crombie</strong><span className="text-yellow-500">Wallet</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 
              lg:mb-8 md:text-lg lg:text-xl">
              {t("bullet-points.1")}
            </p>
            <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">
            {t("bullet-points.2")} Crombie<span className="text-amber-400">Wallet</span>
            </p>
            <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">
            {t("bullet-points.3")}
            </p>
            <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl">
            {t("bullet-points.4")}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Lottie animationData={hero} />
          </div>
        </div>
      </section>
      <Brands/>
      <div className="w-1/2 grid grid-cols-2 items-center mb-4">
        {cardArray.map((card) => (
          <Cards key={card.id} text={card.text} image={card.image} />
        ))}
      </div>
    </div>
  )}
  </div>
  );
}
"use client"
import { useTranslations } from "next-intl"
import hero from "@/public/hero.json"
import Lottie from "lottie-react"
import Cards from "@/components/LandingComponents/Cards"

export default function Home() {
  const t = useTranslations("index")
  return (
    <div className="flex min-h-screen flex-col items-center">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 
          xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold 
            tracking-tight leading-none md:text-5xl xl:text-6xl"
            >
              {t("landing-title")}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 
              lg:mb-8 md:text-lg lg:text-xl">
              {t("landing-subtitle")}
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Lottie animationData={hero} />
          </div>
        </div>
      </section>
      <div className="w-1/2 grid grid-cols-2 items-center mb-24">
        <Cards text={t("cards.1")} />
        <Cards text={t("cards.2")} />
        <Cards text="Como va" />
        <Cards text="xd" />
      </div>


    </div>
  )
}


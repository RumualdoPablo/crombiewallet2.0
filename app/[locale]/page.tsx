import Image from 'next/image'
import { useTranslations } from "next-intl"



export default function Home() {
  const t = useTranslations("index")
  return (
    <div>
      <h1>{t("landing-title")}</h1>
    </div>
  )
}

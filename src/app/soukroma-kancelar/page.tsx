import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Soukromá kancelář",
  description:
    "Pronájem soukromých kanceláří v centru Olomouce. Vlastní uzamykatelný prostor, plné vybavení a maximální soukromí pro váš tým.",
};

const features = [
  {
    title: "Maximální soukromí",
    description:
      "Vlastní uzamykatelný prostor, kde vás nikdo nebude rušit. Ideální pro důvěrné hovory a koncentrovanou práci.",
  },
  {
    title: "Plně vybavený prostor",
    description:
      "Ergonomický nábytek, klimatizace, vysokorychlostní internet a vše, co potřebujete k produktivní práci.",
  },
  {
    title: "Přizpůsobení na míru",
    description:
      "Možnost přizpůsobit si kancelář podle vašich potřeb – od uspořádání nábytku po brandování prostoru.",
  },
  {
    title: "Přístup 24/7",
    description:
      "Jako nájemce soukromé kanceláře máte neomezený přístup kdykoli potřebujete – i o víkendech a svátcích.",
  },
  {
    title: "Prestižní adresa",
    description:
      "Využijte naši adresu na tř. Kosmonautů jako svoji oficiální firemní adresu pro korespondenci.",
  },
  {
    title: "Bez starostí",
    description:
      "Úklid, údržba, energie a internet – vše je zahrnuto v ceně. Soustřeďte se na to, co umíte nejlépe.",
  },
];

const equipment = [
  { name: "Ergonomické kancelářské křeslo" },
  { name: "Výškově nastavitelný stůl" },
  { name: "Vysokorychlostní Wi-Fi a ethernet" },
  { name: "Klimatizace" },
  { name: "Uzamykatelné úložné prostory" },
  { name: "LED osvětlení" },
  { name: "Přístup do zasedacích místností" },
  { name: "Sdílená kuchyňka" },
  { name: "Tiskárna a skener" },
  { name: "Poštovní schránka" },
];

const highlights = [
  "Soukromé kanceláře jsou k dispozici pro 1–8 osob s možností propojení více místností pro větší týmy.",
  "Všechny kanceláře mají přirozené denní osvětlení a výhled do klidného prostředí.",
  "V ceně je zahrnuto využívání společných prostor – kuchyňky, odpočinkové zóny a zasedacích místností.",
  "Flexibilní smlouvy – od 3 měsíců po dlouhodobý pronájem s výhodným cenovým zvýhodněním.",
  "Možnost zřízení sídla firmy na prestižní adrese v centru Olomouce.",
];

export default function SoukremaKancelarPage() {
  return (
    <ServicePageLayout
      title="Soukromá kancelář"
      subtitle="Váš vlastní prostor"
      description="Pronajměte si vlastní uzamykatelnou kancelář v centru Olomouce. Plně vybavený prostor s maximálním komfortem a soukromím pro váš tým."
      features={features}
      equipment={equipment}
      highlights={highlights}
      ctaText="Chci vlastní kancelář"
    />
  );
}

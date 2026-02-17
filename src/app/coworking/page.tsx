import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Coworking",
  description:
    "Coworkingový prostor v centru Olomouce. Flexibilní pracovní místo bez závazků – přijďte kdykoliv a pracujte.",
};

const features = [
  {
    title: "Maximální flexibilita",
    description:
      "Žádné dlouhodobé smlouvy. Přijďte, když potřebujete – na hodinu, den nebo celý měsíc. Placení jen za to, co využijete.",
  },
  {
    title: "Hot desk princip",
    description:
      "Vyberte si jakýkoli volný stůl v otevřeném prostoru. Každý den jiné místo, jiný výhled, jiní sousedé.",
  },
  {
    title: "Inspirativní komunita",
    description:
      "Pracujte vedle designérů, programátorů, marketérů a podnikatelů. Rozmanitost je naší silnou stránkou.",
  },
  {
    title: "Produktivní atmosféra",
    description:
      "Profesionální prostředí, které vás motivuje k práci. Pryč z domova, pryč z kavárny – do skutečné kanceláře.",
  },
  {
    title: "Vše v ceně",
    description:
      "Internet, tisk, káva, čaj a přístup do kuchyňky – vše zahrnuto. Žádné skryté poplatky.",
  },
  {
    title: "Skvělá poloha",
    description:
      "V centru Olomouce, pár minut od nádraží a Šantovky. Snadno dostupné autem i MHD.",
  },
];

const equipment = [
  { name: "Sdílené pracovní stoly" },
  { name: "Pohodlné židle" },
  { name: "Vysokorychlostní Wi-Fi" },
  { name: "Elektrické zásuvky u každého stolu" },
  { name: "Tiskárna a skener" },
  { name: "Kuchyňka s kávovarem" },
  { name: "Odpočinková zóna" },
  { name: "Uzamykatelné skříňky" },
  { name: "Klimatizace" },
  { name: "Telefónní budka pro hovory" },
];

const highlights = [
  "Denní, týdenní i měsíční pasy – vyberte si tarif, který vám vyhovuje nejvíce.",
  "Ideální pro digitální nomády, freelancery a všechny, kdo chtějí pracovat mimo domov.",
  "Tiché zóny pro soustředěnou práci i společné prostory pro brainstorming a spolupráci.",
  "Pravidelné komunitní akce – od workshopů po neformální setkání u piva.",
  "První den na zkoušku zdarma – přijďte si vyzkoušet, jak se u nás pracuje.",
];

export default function CoworkingPage() {
  return (
    <ServicePageLayout
      title="Coworking"
      subtitle="Flexibilní pracovní místo"
      description="Sdílený stůl v moderním coworkingovém prostoru. Přijďte kdykoliv, sedněte si a pracujte. Bez závazků, s maximální flexibilitou."
      features={features}
      equipment={equipment}
      highlights={highlights}
      ctaText="Chci vyzkoušet coworking"
    />
  );
}

import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sdílená kancelář",
  description:
    "Sdílená kancelář v centru Olomouce. Moderní prostor pro malé týmy a freelancery s možností networkingu.",
};

const features = [
  {
    title: "Inspirativní prostředí",
    description:
      "Pracujte vedle dalších profesionálů z různých oborů. Sdílené prostory podporují kreativitu a nové nápady.",
  },
  {
    title: "Nižší náklady",
    description:
      "Sdílením prostoru s dalšími nájemci výrazně snížíte náklady oproti soukromé kanceláři, bez ztráty komfortu.",
  },
  {
    title: "Networking",
    description:
      "Navažte cenné kontakty s ostatními profesionály přímo ve vaší kanceláři. Spolupráce vzniká přirozeně.",
  },
  {
    title: "Vlastní stůl",
    description:
      "Máte přidělený vlastní stůl s úložným prostorem, který je jen váš – nemusíte si hledat místo každý den.",
  },
  {
    title: "Flexibilita",
    description:
      "Potřebujete více míst? Snadno rozšíříte svůj pronájem. Rostete s námi bez starostí se stěhováním.",
  },
  {
    title: "Sdílené zázemí",
    description:
      "Kuchyňka, tiskárna, zasedací místnost – vše sdílené, ale vždy dostupné, když to potřebujete.",
  },
];

const equipment = [
  { name: "Osobní pracovní stůl" },
  { name: "Ergonomické křeslo" },
  { name: "Uzamykatelný šuplík/skříňka" },
  { name: "Vysokorychlostní Wi-Fi" },
  { name: "Sdílená tiskárna a skener" },
  { name: "Klimatizace" },
  { name: "Kuchyňka s kávovarem" },
  { name: "Odpočinková zóna" },
  { name: "Přístup do zasedacích místností" },
  { name: "Úklid v ceně" },
];

const highlights = [
  "Sdílená kancelář je ideální pro freelancery, start-upy a malé týmy do 4 lidí, kteří chtějí profesionální zázemí.",
  "Pravidelné komunitní akce a networkingové snídaně pro všechny členy FREEWORK.",
  "Možnost využití zasedacích místností pro schůzky s klienty – vše pod jednou střechou.",
  "Klid na práci zajištěn – sdílené kanceláře mají maximálně 6 pracovních míst.",
  "Cenově dostupná alternativa k soukromé kanceláři s mnoha stejnými výhodami.",
];

export default function SdilenaKancelarPage() {
  return (
    <ServicePageLayout
      title="Sdílená kancelář"
      subtitle="Společně, ale s vlastním místem"
      description="Moderní sdílená kancelář pro freelancery a malé týmy. Vlastní stůl v profesionálním prostředí s možností networkingu a spolupráce."
      features={features}
      equipment={equipment}
      highlights={highlights}
      ctaText="Chci místo ve sdílené kanceláři"
    />
  );
}

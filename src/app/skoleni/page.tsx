import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Školení & Workshop",
  description:
    "Pronájem prostor pro školení a workshopy v centru Olomouce. Prostorné místnosti s moderní technikou pro vaše firemní akce.",
};

const features = [
  {
    title: "Prostorné místnosti",
    description:
      "Velké, vzdušné prostory až pro 30 účastníků. Ideální pro školení, workshopy, semináře i team-buildingové akce.",
  },
  {
    title: "Profesionální technika",
    description:
      "Projektor, plátno, ozvučení, mikrofony a vše potřebné pro bezproblémový průběh vaší akce.",
  },
  {
    title: "Flexibilní uspořádání",
    description:
      "Místnost lze uspořádat do divadelního, školního, U-tvaru nebo workshopového stylu – přesně podle vašich potřeb.",
  },
  {
    title: "Celodenní pronájem",
    description:
      "Půldenní i celodenní pronájem za zvýhodněné ceny. Pravidelné školení? Nabídneme paušální tarif.",
  },
  {
    title: "Catering",
    description:
      "Zajistíme kompletní catering – od coffee breaku přes oběd po večerní raut. Spolupracujeme s lokálními dodavateli.",
  },
  {
    title: "Technická podpora",
    description:
      "Náš tým vám pomůže s přípravou místnosti, technikou i jakýmkoliv požadavkem během akce.",
  },
];

const equipment = [
  { name: "Projektor a velké plátno" },
  { name: "Ozvučení s bezdrátovým mikrofonem" },
  { name: "Whiteboard a flipchartové tabule" },
  { name: "Vysokorychlostní Wi-Fi" },
  { name: "Přestavitelný nábytek" },
  { name: "Klimatizace" },
  { name: "Přípojky pro notebooky (HDMI, USB-C)" },
  { name: "Moderátorský kufr" },
  { name: "Coffee break zázemí" },
  { name: "Šatna pro účastníky" },
];

const highlights = [
  "Prostor pro až 30 účastníků s možností rozdělení na dvě menší sekce pro paralelní workshopy.",
  "Zkušenosti s organizací firemních školení, produktových prezentací i hackathonů.",
  "Spolupracujeme s lokálními cateringovými firmami – zdravé obědy, domácí zákusky i klasický coffee break.",
  "Parkování pro účastníky v blízkosti budovy a snadná dostupnost MHD.",
  "Možnost branding prostoru – vaše bannery, roll-upy a materiály rozmístíme před příchodem účastníků.",
];

export default function SkoleniPage() {
  return (
    <ServicePageLayout
      title="Školení & Workshop"
      subtitle="Prostory pro vzdělávání"
      description="Prostorné místnosti s moderní technikou pro firemní školení, workshopy, semináře a team-buildingové akce. Kompletní servis od přípravy po catering."
      features={features}
      equipment={equipment}
      highlights={highlights}
      ctaText="Rezervovat prostor pro akci"
    />
  );
}

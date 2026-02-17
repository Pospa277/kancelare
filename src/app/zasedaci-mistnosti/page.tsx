import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Zasedací místnosti",
  description:
    "Pronájem zasedacích místností v centru Olomouce. Reprezentativní prostory pro schůzky, prezentace a jednání.",
};

const features = [
  {
    title: "Reprezentativní prostor",
    description:
      "Moderní a elegantní místnosti, které udělají dojem na vaše klienty a obchodní partnery.",
  },
  {
    title: "Moderní technika",
    description:
      "Projektor, velká obrazovka, ozvučení a videokonferenční systém – vše připraveno k okamžitému použití.",
  },
  {
    title: "Různé velikosti",
    description:
      "Od komorních jednacích místností pro 4 osoby po velké konferenční sály až pro 20 účastníků.",
  },
  {
    title: "Hodinový pronájem",
    description:
      "Pronajměte si místnost přesně na dobu, kterou potřebujete – od jedné hodiny po celý den.",
  },
  {
    title: "Občerstvení",
    description:
      "Možnost objednání cateringu – káva, čaj, voda a drobné občerstvení pro účastníky vaší schůzky.",
  },
  {
    title: "Online rezervace",
    description:
      "Jednoduše si rezervujte místnost online a přijďte – vše bude připraveno podle vašich požadavků.",
  },
];

const equipment = [
  { name: "Projektor / velká obrazovka" },
  { name: "Videokonferenční systém" },
  { name: "Whiteboard a flipchart" },
  { name: "Ozvučení místnosti" },
  { name: "Vysokorychlostní Wi-Fi" },
  { name: "HDMI a USB-C připojení" },
  { name: "Klimatizace" },
  { name: "Možnost zatemnění" },
  { name: "Občerstvení na vyžádání" },
  { name: "Recepční služby" },
];

const highlights = [
  "Tři typy zasedacích místností: malá (4 osoby), střední (10 osob) a velká (20 osob) – vyberte si podle potřeby.",
  "Všechny místnosti jsou odhlučněné pro maximální soukromí vašich jednání.",
  "Možnost brandování místnosti pro opakované klienty – vaše logo a materiály vždy na místě.",
  "Recepce přivítá vaše hosty a nabídne jim občerstvení, zatímco vy se připravíte.",
  "Strategická poloha – vaši klienti snadno zaparkují nebo přijedou MHD přímo ke dveřím.",
];

export default function ZasedaciMistnostiPage() {
  return (
    <ServicePageLayout
      title="Zasedací místnosti"
      subtitle="Profesionální jednání"
      description="Reprezentativní zasedací místnosti pro vaše schůzky, prezentace a obchodní jednání. Moderní technika a elegantní prostory v centru Olomouce."
      features={features}
      equipment={equipment}
      highlights={highlights}
      ctaText="Rezervovat zasedací místnost"
    />
  );
}

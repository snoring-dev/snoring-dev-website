import MainHero from "@/components/overview/MainHero";
import DomainsOverview from "@/components/overview/domains-overview";
import Faq from "@/components/overview/faq";
import PortfolioOverview from "@/components/overview/portfolio-overview";
import EmptySpace from "@/components/ui/empty-space";


export default function Home() {
  return (
    <>
      <MainHero />
      <DomainsOverview />
      <PortfolioOverview />
      <Faq />
      <EmptySpace />
    </>
  );
}

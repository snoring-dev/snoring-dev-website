import Footer from "@/components/footer";
import MainHero from "@/components/overview/MainHero";
import DomainsOverview from "@/components/overview/domains-overview";
import Faq from "@/components/overview/faq";
import PortfolioOverview from "@/components/overview/portfolio-overview";
import Proposal from "@/components/overview/proposal";
import EmptySpace from "@/components/ui/empty-space";


export default function Home() {
  return (
    <>
      <MainHero />
      <DomainsOverview />
      <PortfolioOverview />
      <Faq />
      <Proposal />
      <EmptySpace />
      <Footer />
    </>
  );
}

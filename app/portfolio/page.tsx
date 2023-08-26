import Container from "@/components/container";
import Footer from "@/components/footer";
import Proposal from "@/components/overview/proposal";
import PortfolioCard from "@/components/portfolio/card";
import PortfolioHero from "@/components/portfolio/hero";
import EmptySpace from "@/components/ui/empty-space";

function PotfolioPage() {
  return (
    <>
      <PortfolioHero />
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-4 p-8">
            <PortfolioCard />
          </div>
          <div className="col-span-12 lg:col-span-4 p-8">
            <PortfolioCard />
          </div>
          <div className="col-span-12 lg:col-span-4 p-8">
            <PortfolioCard />
          </div>
        </div>
      </Container>
      <Proposal />
      <EmptySpace />
      <Footer />
    </>
  );
}

export default PotfolioPage;

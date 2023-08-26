import { Archivo_Narrow } from "next/font/google";
import Container from "@/components/container";
import { cn } from "@/utils";

const font = Archivo_Narrow({ subsets: ["latin"] });

function PortfolioHero() {
  return (
    <div className={cn(font.className, "bg-[#FAFBFC] w-full py-16 lg:py-0 lg:h-[650px]")}>
      <Container className="h-full">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <div className="text-5xl lg:text-6xl font-bold text-center lg:w-1/2 text-gray-700">
            The news that sourround us is collected here
          </div>
          <div className="text-sm lg:text-xl text-center text-gray-400 px-10 lg:px-32 mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
            dolorum sequi recusandae voluptas ipsam autem accusamus assumenda
            magnam unde? Consequatur magni accusantium explicabo blanditiis
            vitae aut exercitationem laborum sit animi.
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PortfolioHero;

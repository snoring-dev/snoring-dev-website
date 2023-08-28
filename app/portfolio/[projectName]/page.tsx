import Container from "@/components/container";
import CarouselClient from "@/components/carousel-client";
import Image from "next/image";
import { Archivo_Narrow } from "next/font/google";
import { cn } from "@/utils";
import Link from "next/link";
import Footer from "@/components/footer";
import PortfolioCard from "@/components/portfolio/card";

const font = Archivo_Narrow({ subsets: ["latin"] });

const CompanyData = () => {
  return (
    <div className="col-span-3">
      <div className="flex flex-col gap-6 border border-gray-200 rounded-lg p-3 w-full min-h-16">
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-black">Company</p>
          <p className="font-extralight text-blue-300">Disneyland Paris</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-black">Location</p>
          <p className="font-extralight text-blue-300">{`Val d'Europe (Paris)`}</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-black">Industry</p>
          <p className="font-extralight text-blue-300">
            Entertainment & Lifestyle
          </p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-black">Size</p>
          <p className="font-extralight text-blue-300">+17k</p>
        </div>
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-black">Website</p>
          <p className="font-extralight text-blue-300">
            <Link href="#" className="text-blue-700 font-normal">
              disneylandparis.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const ExperienceStory = () => {
  return (
    <div className="col-span-9 pl-16">
      <section>
        <p className="text-2xl font-semibold">
          The company that was created to combine
        </p>
        <p className="prose w-full max-w-4xl mt-8 text-black/70">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            fringilla est sit amet finibus fermentum. Ut nec felis sapien.
            Phasellus consectetur posuere magna. Integer ornare vehicula
            ullamcorper. Mauris ut lacus a mi mollis malesuada at quis mi.
            Pellentesque eget dignissim nibh. Cras ullamcorper, lacus ut semper
            blandit, orci metus blandit sapien, sit amet mollis tortor augue
            quis velit. Maecenas consequat semper volutpat. Nunc justo purus,
            tempor vel velit quis, suscipit ullamcorper orci. Aenean congue
            turpis vitae odio tempor efficitur.
          </p>
          <p>
            Morbi convallis vehicula placerat. In vestibulum facilisis arcu
            vitae malesuada. Curabitur vehicula vulputate nisi quis viverra.
            Nullam tempor, turpis vel condimentum posuere, tellus risus
            condimentum urna, ac gravida sapien magna a mauris. Nulla viverra
            mauris dui, eget porta nibh pharetra nec. Integer ac arcu ut urna
            eleifend tristique vitae a libero. Praesent sit amet eros odio.
            Donec laoreet odio in faucibus elementum. Morbi vitae tellus
            molestie, molestie nulla a, rhoncus lorem. Integer tincidunt sapien
            sed condimentum maximus. Suspendisse ac eros lorem. Curabitur
            elementum faucibus tempus.
          </p>
          <p>
            Donec tincidunt nunc pharetra euismod tristique. Vivamus ornare
            blandit sem a accumsan. Phasellus vel augue ac enim rutrum ultrices.
            Aliquam sit amet hendrerit mauris. Aliquam quis dolor non justo
            feugiat commodo. Maecenas pharetra tristique lectus non
            pellentesque. Suspendisse laoreet vel tortor in gravida.
            Pellentesque varius arcu vel condimentum vestibulum. Nam et tempus
            nisl. Nulla lacus massa, dictum vitae purus ac, mattis ultrices
            metus.
          </p>
          <p>
            Morbi eleifend elementum dolor. Sed vitae eros metus. Nullam non
            enim dictum, finibus dolor id, hendrerit libero. Nam gravida, nisl
            eget viverra elementum, mauris quam rhoncus metus, interdum cursus
            dui dui et diam. Nam varius augue enim, in ornare odio porttitor
            quis. Quisque tincidunt, mi sed eleifend dapibus, mauris eros porta
            felis, eget eleifend lectus justo a nisi. Cras quis mauris pharetra,
            tempus leo sit amet, maximus nulla. Vivamus aliquam eleifend urna,
            malesuada aliquam tellus posuere eget. Mauris volutpat, nunc eget
            cursus consectetur, lacus leo pretium nunc, ac facilisis urna nisi
            at dui. Fusce convallis consectetur lectus, eu feugiat ex gravida
            in. Curabitur non justo ipsum.
          </p>
          <p>
            Nam commodo gravida quam nec blandit. Praesent ultricies odio id
            purus congue, eu eleifend est maximus. Nam sed mollis orci, ac
            posuere turpis. Mauris nec suscipit sem. Donec tristique id leo sed
            aliquam. Vestibulum pellentesque semper ex vel aliquet. Etiam
            ultrices enim quis sapien sagittis, pellentesque maximus ex viverra.
          </p>
        </p>
      </section>
    </div>
  );
};

function ProjectPage() {
  return (
    <>
      <Container>
        <section
          className={cn(
            font.className,
            "lg:py-24 flex flex-col items-center justify-center"
          )}
        >
          <div className="relative overflow-hidden w-[200px] h-[150px] aspect-square">
            <Image
              fill
              className="object-contain object-center"
              src="https://res.cloudinary.com/mjemmoudi/image/upload/v1693064449/logos/1280px-Disneyland_Paris_logo.svg.png"
              alt=""
            />
          </div>
          <p className="text-5xl font-semibold">The Walt Disney Company</p>
          <p className="text-lg text-gray-400 text-center px-32 py-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            quaerat, nam earum alias est, eos voluptatem expedita vel laudantium
            quibusdam sapiente a non optio labore nihil veniam corrupti
            excepturi? Quod!
          </p>
        </section>
        <CarouselClient>
          <div className="relative overflow-hidden w-full h-[600px]">
            <Image
              fill
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden w-full h-[600px]">
            <Image
              fill
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="relative overflow-hidden w-full h-[600px]">
            <Image
              fill
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </CarouselClient>

        {/* HERE THE REAL CONTENT */}
        <div className="grid grid-cols-12 my-12">
          <CompanyData />
          <ExperienceStory />
        </div>
        <section className="mt-44 mb-12">
          <p className="mx-auto text-center capitalize text-4xl font-bold text-black py-8">
            <span>See other projects</span>
            <span className="block w-32 h-1 mx-auto mt-5 border-b border-gray-200"/>
          </p>
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
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default ProjectPage;

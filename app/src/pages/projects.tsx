import Container from "@client/components/common/Container";
import { cn } from "@client/utils";
import CalendlyButton from "@client/components/common/CalendlyButton";

export default function Projects() {
  return (
    <Container
      title="Projects - Azat Hafizov"
      description="Azat Hafizov's projects"
    >
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h1>
      <div className="my-12 sm:flex justify-between items-center">
        <p className="mb-4 sm:mb-0">
          Use Calendly to schedule a quick call if you'd like to learn more
        </p>
        <CalendlyButton />
      </div>
      <div className="prose dark:prose-dark">
        <ul>
          <li>
            <div className="mt-6 text-lg font-medium">
              Hyred.ai &mdash; platform for selling resumes as NFTs
            </div>
            <div>
              Marketplace for candidates selling their resumes as NFTs built
              with Polygon, Next.js, Typescript, GraphQL subscriptions,
              Prisma.io, PostgreSQL, Nexus, Codegen, Hardhat, ethers.js,
              Alchemy, Algolia, AWS Lambda and Terraform.
            </div>
            <iframe
              className="w-full aspect-video mt-6 mb-12"
              src="https://www.youtube.com/embed/1b9aCeIR5rU"
              title="Hyred.ai - platform for selling resumes as NFTs"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            />
          </li>
          <li>
            <div className="mt-6 text-lg font-medium">
              ANDRO &mdash; no-code tool for video concierges
            </div>
            <div>
              SaaS platform for creating video chatbots using a visual builder.
              &laquo;Concierges&raquo; could be integrated into any website by
              inserting a single script tag. Video questions are generated by a
              custom GAN built on top of CycleGAN and pix2pix in Pytorch.
            </div>
          </li>
          <li>
            <div className="mt-6 text-lg font-medium">
              ROLLO &mdash; &laquo;live commerce&raquo; marketplace
            </div>
            <div>
              Crowdfunding supply contracts on Ethereum, AI assessment of
              sellers' profiles for buyers, CV face recognition-based KYC and
              P2P video streaming capabilities for sellers built with WebRTC.
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
}

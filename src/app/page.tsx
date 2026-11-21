import Image from 'next/image';
import TestLogo from '../assets/images/proto_echo_logo.png';
import Nav from "@/components/layout/TestTransition/Nav";
import PageWrapper from "@/components/layout/TestTransition/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <Nav />
      <main className="min-h-screen flex flex-col items-center justify-center bg-blue-900 text-white">
        <Image src={TestLogo} alt="logo" loading="eager" />
        <h1 className="text-5xl font-bold">ECHO-Hack</h1>
        <p className="mt-4 text-xl">Coming April 2027</p>
        <div>
          <h1 className="hero font-craze text-4xl text-white text-shadow-[4px_4px_0_#000]">ECHOHack 2027</h1>
          <p className="hero-subtitle leading-tight font-thezore">A 24 hour hackathon hosted by IEEE CS at the University of Texas at Arlington</p>
        </div>
      </main>
    </PageWrapper>

  );
}
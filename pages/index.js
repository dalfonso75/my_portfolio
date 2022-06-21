import Head from "next/head";
import { SmoothScrollProvider } from "../context/SmoothScroll.context";

import AppLayout from "../components/AppLayout";
import Menu from "../components/Menu";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider
        options={{
          smooth: true,
          table: {
            smooth: true,
          },
          smartphone: {
            smooth: true,
          },
        }}
      >
        <Menu />
        <AppLayout>
          <Head>
            <title>Deiver Alfonso - Portafolio</title>
            <meta
              name="description"
              content="Soy Full Stack Developer en JavaScript con 2 años de experiencia en Next.js, React js, Node js, Express, HTML, CSS y Python."
            />
          </Head>
          <main data-scroll-container className="container">
            <AboutMe />
            <Education />
            <Skills />
            <Portfolio />
            <Footer />
          </main>
        </AppLayout>
      </SmoothScrollProvider>
    </>
  );
}

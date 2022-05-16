import Head from "next/head";
import { SmoothScrollProvider } from "../context/SmoothScroll.context";

import AppLayout from "../components/AppLayout";
import Menu from "../components/Menu";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Skills from "../components/Skills";

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
              content="Soy un Fullstack Developer en JavaScript con 2 años de experiencia desarrollando API REST y sitios web."
            />
          </Head>
          <main data-scroll-container className="container">
            <AboutMe />
            <Education />
            <Skills />
          </main>
        </AppLayout>
      </SmoothScrollProvider>
    </>
  );
}

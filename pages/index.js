import Head from "next/head";
import AppLayout from "../components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <Head>
        <title>Deiver Alfonso - Portafolio</title>
        <meta
          name="description"
          content="Soy un Fullstack Developer en JavaScript con 2 años de experiencia desarrollando API REST y sitios web."
        />
      </Head>
      <main>
        <h1>Deiver Alfonso</h1>
      </main>
    </AppLayout>
  );
}

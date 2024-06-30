import Hero from "../components/Hero";
import Apestore from "../components/Apestore";

export default function Home() {
  return (
    <>
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="apestore">
          <Apestore />
          <footer className="flex justify-center">
            <p className="pixel-font"> Email: prashbase@gmail.com</p>
          </footer>
        </section>
      </main>
    </>
  );
}

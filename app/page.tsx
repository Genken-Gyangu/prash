import Hero from "../components/Hero";
import Apestore from "../components/Apestore";

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black text-white z-20">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">Prash</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#hero" className="hover:text-accent">Home</a>
            <a href="#apestore" className="hover:text-accent">Apestore</a>
          </nav>
        </div>
      </header>
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="apestore">
          <Apestore />
        </section>
      </main>
    </>
  );
}

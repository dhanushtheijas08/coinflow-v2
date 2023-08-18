import Header from "../components/Header";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <section className="home-section px-4 md:px-8 lg:px-10 py-4 md:py-6 lg:py-7">
      <Header />
      <Hero />
    </section>
  );
}

export default HomePage;

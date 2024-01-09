import Homehero from "./components/home-comp/Home-hero";
import HomeNuestrosClientes from "./components/home-comp/home-nuestrosClientes";
import HomePyS from "./components/home-comp/Home-PyS";
import HomeSectionA from "./components/home-comp/Home-sectionA";
import HomeVisionMision from "./components/home-comp/Home-visionMision";
export default function Home() {
  return (
    <>
      <Homehero />
      <main>
        <HomeSectionA />
        <HomeVisionMision />
        <HomePyS />
        <HomeNuestrosClientes/>
      </main>
    </>
  );
}

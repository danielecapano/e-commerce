import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewletterBox from "../components/NewletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <NewletterBox />
    </div>
  );
};

export default Home;

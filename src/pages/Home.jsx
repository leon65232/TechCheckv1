import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ChatbotSection from "../components/ChatbotSection"
import FactSection from "../components/FactSection"
import CheckMapSection from "../components/CheckMapSection"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
      <Hero />
      <ChatbotSection />
      <FactSection />
      <CheckMapSection />
    </>
  );
};

export default Home;
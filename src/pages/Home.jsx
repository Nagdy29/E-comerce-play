import Navbar from "../components/Navbar";
import OfferBar from "../components/OfferBar";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div dir="rtl">
      <Navbar />
      <OfferBar />
      <Hero />
      <HomeProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;

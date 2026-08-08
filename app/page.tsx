import Navbar from "./navbar";
import HeroSlider from "./heroslider";
import CategoryBoxes from "./categoryboxes";
import Footer from "./footer";

export default function Home() {
  return (
  <div>
    <Navbar />
    <HeroSlider/>
    <CategoryBoxes />
    <Footer />
  </div>
  );
}

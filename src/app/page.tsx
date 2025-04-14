import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import UpcomingEvent from "./component/UpcomingEvent";
import MakeEvent from "./component/MakeEvent";
import OurBrand from "./component/OurBrand";
import Blog from "./component/Blog";
import Footer from "./component/Footer";

export default function home() {
  return (
    <div>
      <Navbar 
      logoText="Eventick Gaming"
      logoColor="text-white-400"
      navItems={[
    { label: 'Tournaments', href: '#tournaments' },
    { label: 'Teams', href: '#teams' },
    { label: 'Stream', href: '#stream' },
    { label: 'Sign In', href: '#login' }
  ]}
  hoverColor="text-purple-500"
  bgColor="bg-gray-900" />
      <HeroSection />
      <UpcomingEvent />
      <MakeEvent />
      <OurBrand />
      <Blog />
      <Footer />
    </div>
  );

}
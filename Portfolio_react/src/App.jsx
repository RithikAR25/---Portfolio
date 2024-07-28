import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Section_Contact from "./Components/Section_contact/Section_Contact";
import Section_Project from "./Components/Section_Project/Section_Project";
import Section_Skills from "./Components/Section_skill/Section_Skills";


function App() {
  return (
  <>
  <Banner/>
  <Navbar/>
  <Section1/>
  <Section_Skills/>
  <Section_Project/>
  <Section_Contact/>
    <Footer/>
  </>);
}






export default App;

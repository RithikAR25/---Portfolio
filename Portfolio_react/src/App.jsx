import Banner from "./Pages/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Pages/Section1";
import Section_Contact from "./Pages/Section_Contact";
import Section_Project from "./Pages/Section_Project";
import Section_Skills from "./Pages/Section_Skills";



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

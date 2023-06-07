import Home from "./scenes/home";
import OurClasses from "./scenes/ourProjects";
import Benefits from "./scenes/benefits";
// import ContactUs from "./scenes/blog"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import Head from "next/head";
import Layout from "./scenes/layout"
import CTA from "./scenes/cta";
import ContactForm from "./scenes/contactForm";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

 useEffect(() => {
  const handleScroll = () => {
  // We use window.scrollY to check if we are at the top of the page, if it is at 0 we are at the top.
    if (window.scrollY === 0) {
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home)
    }
    if (window.scrollY === 0) {
      setIsTopOfPage(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
 }, []);

  return (
    <div className="app w-full h-full mx-auto overflow-hidden">
      <Head>
        <title>
          Creative Forge
        </title>
        <link rel="icon" type="image/svg+xml" href="/HomePageGraphic.svg" />
        <meta
          name="description"
          content="Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive growth."
          key="desc"
        />
      </Head>
      <Layout setSelectedPage={setSelectedPage}>
        <Home setSelectedPage={setSelectedPage}/>
        <Benefits setSelectedPage={setSelectedPage}/>
        <CTA />
        {/* <ContactUs setSelectedPage={setSelectedPage}/> */}
        <ContactForm  setSelectedPage={setSelectedPage}/>
      </Layout>
    </div>
  )
}

export default App

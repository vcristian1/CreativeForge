import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../../shared/ActionButton";
import HomePageText from "../../../public/HomePageText.svg";
import HomePageGraphic from "../../../public/HomePageGraphic.svg";
import SponsorForbes from "../../../public/SponsorForbes.png";
import SponsorFortune from "../../../public/SponsorFortune.png";
import SponsorAG from "../../../public/SponsorAG.png";
import { SelectedPage } from '../../../shared/types';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from "next/link";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
     id="Home"
     className="gap-16 xs:bg-HomePageImage4 bg-HomePageImage3 md:bg-HomePageImage1 lg:bg-HomePageImage2 py-[10px] md:h-full md:w-full"
    >
        {/* Image and Main Header Here */}
        <motion.div 
         className="mx-auto w-5/6 items-center justify-center"
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
         }}
        >
            {/* Image Here */}
            <div className="flex basis-3/5 justify-center mt-[120px] mb-[-120px] md:mb-[25px] md:z-10 md:mt-20 md:justify-items-end lg:mt-[170px]">
                <Image className="md:w-[450px] md:h-[475px] lg:h-[600px] lg:w-[625px]" src={HomePageGraphic} alt="home-page-graphic" />
            </div>
            {/* Main Header Here */}
            <div className="z-10 md:mt-[-25px] mt-[150px] md:w-5/6 h-[520px] lg:h-[185px] md:h-[225px]">
                {/* Action Buttons Here */}
                <p className="text-[#f3dfc1] font-thin text-center md:ml-[180px] mt-8 flex gap-8 justify-center text-[22px] md:text-[26px] lg:text-[31px]">Peace Pelvic Health is a mobile specialty physical therapy practice specializing in treating pelvic and orthopedic conditions. We help our patients with their most basic, yet most private functions.</p>
                <motion.div 
                 className="md:ml-[180px] mt-8 flex gap-8 lg:ml-[275px] justify-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: .25, duration: 0.5 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <Link
                     className="rounded-md bg-[#dea54b] px-10 md:px-10 py-2 md:py-3 lg:px-12 lg:py-4 lg:text-[25px] text-[#160F29] hover:bg-[#f3dfc1] hover:text-[#160F29] transition duration-500 ml-1 md:ml-1 lg:mt-[30px]"
                     href="/About"
                    > About Us 
                    </Link>
                    <AnchorLink href='#Contact' className="rounded-md bg-[#003a47] p-8 md:px-10 py-2 md:py-3 lg:px-12 lg:py-4 lg:text-[25px] text-[#f3dfc1] hover:bg-[#f3dfc1] hover:text-[#160F29] transition duration-500 ml-1 md:ml-1 lg:mt-[30px]">Book Appointment</AnchorLink>
                </motion.div>
            </div>
            
        </motion.div>

        {/* Sponsors Here */}
        {isAboveMediumScreens && (
            <div id="Welcome"className="lg:mt-4 h-[50px] w-full py-10">
                
            </div>
        )}
    </section>
  )
}

export default Home
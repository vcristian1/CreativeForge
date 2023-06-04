import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../../shared/ActionButton";
import HomePageText from "../../../public/HomePageText.svg";
import HomePageGraphic from "../../../public/HomePageGraphic.svg";
import HomePageGraphic2 from "../../../public/HomePageGraphic2.svg";
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
     className="gap-16 bg-[#F9FBFD] py-[10px] md:h-full md:w-full"
    >
        {/* Image and Main Header Here */}
        <motion.div 
         className="mx-auto w-5/6 items-center justify-center"
         onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
         initial="visible"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
         }}
        >
            <div className="flex basis-3/5 justify-center mt-[120px] mb-[-120px] md:mb-[25px] md:z-10 md:mt-22 md:justify-items-end lg:mt-[170px]">
                <Image className="md:w-[200px] md:h-[150px] lg:h-[600px] lg:w-[625px]" src={HomePageGraphic} alt="home-page-graphic" />
            </div>
            {/* Main Header Here */}
            <div className="z-10 md:mt-[-25px] mt-[150px] md:w-5/6 h-[520px] lg:h-[185px] md:h-[225px]">
                {/* Action Buttons Here */}
                <h1 className="text-[#011C43] font-bold text-center md:ml-[180px] mt-8 flex gap-8 justify-center text-[22px] md:text-[42px] lg:text-[31px]">Chicago{"'"}s Premier Web Design & Development Studio</h1>
                <motion.div 
                 className="md:ml-[180px] mt-8 flex gap-8 lg:ml-[275px] justify-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: .5, duration: 1 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <h2 className="text-center text-[22px] md:text-[20px] lg:text-[31px]">Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive more growth.</h2>
                </motion.div>
            </div>
            <motion.div 
             className="flex basis-3/5 justify-center mt-[-50px] mb-[-120px] md:z-10 md:mt-[-125px] md:justify-items-end lg:mt-[170px]"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0, duration: 1 }}
             variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
             }}
            >
                <Image className="lg:h-[150px] lg:w-[625px]" src={HomePageGraphic2} alt="home-page-graphic" />
            </motion.div>
            
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
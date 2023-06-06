import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../../shared/ActionButton";
import HomePageText from "../../../public/HomePageText.svg";
import HomePageGraphic from "../../../public/HomePageGraphic.svg";
import HomePageGraphic2 from "../../../public/HomePageGraphic2.svg";
import SponsorForbes from "../../../public/SponsorForbes.png";
import SponsorFortune from "../../../public/SponsorFortune.png";
import SponsorAG from "../../../public/SponsorAG.png";
import BannerIcon from "../../../public/banner-icon-1-2.svg"
import BannerIcon2 from "../../../public/banner-icon-1-1.svg"
import BannerIcon3 from "../../../public/banner-icon-1-4.svg"
import BannerIcon4 from "../../../public/banner-icon-1-6.svg"
import BannerIcon5 from "../../../public/dot-pattern.svg"
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
     id="home"
     className="gap-16 bg-slate-50 py-[10px] md:h-full md:w-full"
    >
        {/* Image and Main Header Here */}
        <motion.div 
         className="mx-auto w-5/6 items-center justify-center md:mb-[50px]"
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
            
            <div className="flex basis-3/5 justify-center mt-[175px] mb-[-150px] md:mb-[25px] md:z-10 md:mt-18 md:justify-items-end lg:mt-[200px]">
                <Image className="h-[150px] w-[200px] md:w-[200px] md:h-[150px]" src={HomePageGraphic} alt="home-page-graphic" />
            </div>
            {/* Main Header Here */}
            <div className="z-10 md:mt-[-25px] mt-[150px] md:w-5/6 h-[520px] lg:h-[185px] md:h-[225px]">
                {/* Action Buttons Here */}
                <h1 className="text-[#011C43] font-bold text-center md:ml-[180px] mt-8 gap-8 justify-center text-[32px] md:text-[42px] lg:text-[55px]">Chicago{"'"}s Premier Web Design & Development Studio</h1>
                <motion.div 
                 className="md:ml-[180px] mt-8 flex gap-8 justify-center"
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: .5, duration: 1 }}
                 variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                 }}
                 >
                    <h2 className="text-center text-[20px] md:text-[20px] lg:text-[32px]">Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive more growth.</h2>
                </motion.div>
            </div>
            <motion.div
             animate={{ rotate: [0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, ] }} 
             transition={{ duration: 300, ease: "easeInOut", loop: Infinity }} 
             className="flex mt-[-100px]"
             
            > 
                <Image 
                    src={BannerIcon} 
                    className="h-14 w-14 md:w-[50px] md:h-[75px] md:mt-10"
                    alt="code-graphic"
                />
                <Image 
                    src={BannerIcon2} 
                    className="h-14 w-14 md:w-[175px] md:h-[75px] mt-[-10px] ml-[215px] md:mt-10 md:ml-[1000px] lg:ml-[1350px] "
                    alt="code-graphic"
                />
            </motion.div>
            <motion.div 
             className="flex basis-3/5 justify-center mt-[-50px] mb-[-120px] md:z-10 md:mt-[-150px] md:justify-items-end lg:mt-[-50px]"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0, duration: 1 }}
             variants={{
              hidden: { opacity:0, x:-50},
              visible: { opacity: 1, x: 0},
             }}
            >
                <Image className="mt-[25px]" src={HomePageGraphic2} alt="home-page-graphic" />
                
            </motion.div>
            <motion.div
             animate={{ rotate: [0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, ] }} 
             transition={{ duration: 300, ease: "easeInOut", loop: Infinity }} 
             className="flex mb-[25px]"
             
            > 
                <Image 
                    src={BannerIcon3} 
                    className="h-16 w-16 mt-[125px] md:w-[200px] md:h-[100px] md:mt-[-25px] md:ml-[-50px]"
                    alt="code-graphic"
                />
                <Image 
                    src={BannerIcon4} 
                    className="h-20 w-20 ml-[210px] mt-[100px] md:w-[200px] md:h-[100px] md:ml-[950px] md:mt-[-50px] lg:ml-[1400px] lg:mt-[-100px]"
                    alt="code-graphic"
                />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Home
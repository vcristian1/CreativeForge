import { useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import homelogo from "../../../public/homelogo.svg";
import Links from "./LinkComponent";
import Link from "next/link"
import { SelectedPage } from "../../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from 'next/image'
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: ( value: SelectedPage) => void;
    isTopOfPage: boolean
};

const Navbar = ({  isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "bg-[#F9FBFD] drop-shadow-xl" : ""

  return (
    <nav>
        <div
         className={`${navbarBackground} fixed top-0 z-30 w-full py-2.5 md:py-0.5 lg:py-0.5`} 
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            {/* Name and Menu Icon within this container */}
            <div className={`${flexBetween} w-full gap-16`}>
                {/* Left Side */}
                
                <Link href="/"><Image className="h-[100px] w-[100px] md:h-[80px] md:w-[175px] lg:h-[150px] lg:w-[200px]" src={homelogo} alt="logo" /></Link>
                {/* Right Side */}

                {isAboveMediumScreens ? (
                    <div className={`${flexBetween} w-full`}>
                        {/* Inner Left Side (All Links) */}
                        <div className={`md:ml-[150px] lg:ml-[330px] flex gap-10 md:gap-12 text-[14px] md:text-[16px] lg:text-[24px] `}>
                            <Link href="/" className="font-thin xs:text-[14px] sm:text-[14px] md:text-[16px] hover:text-[#56AEFF] text-[#011C43] transition duration-500 lg:text-[24px]">Home</Link>
                            <AnchorLink href="#Services">Services</AnchorLink>
                            <AnchorLink href="#Pricing">Pricing</AnchorLink>
                            <AnchorLink href="#Projects">Projects</AnchorLink>
                            <AnchorLink href="#Contact">Contact</AnchorLink>
                        </div>
                        {/* Inner Right Side (Call and Email buttons)*/}
                        <div className={`${flexBetween} gap-2 md:gap-3`}>
                            <Link
                            className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1"
                            href="tel:773-706-5634"
                            > Lets Chat
                            </Link>                         
                        </div>
                    </div>
                    ) : (
                        // If it is not aboveMdeiumScreen then the below code will render for mobile screens
                        <button className="text-[#56AEFF] rounded-full transition duration-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </button>
                    )}  
            </div>
          </div>
        </div>

        {/* Mobile Menu Modal */}
        { !isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-[#56AEFF] drop-shadow-xl">
                {/* Close Icon Here */}
                <div className="flex justify-end p-12">
                    <button
                     onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <XMarkIcon 
                         className="h-6 w-6 text-slate-50 transition duration-500"
                        />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="mt-[-5px] ml-[33%] flex flex-col gap-10 text-[18px]">
                <Link href="/" className="font-thin text-[18px] md:text-[16px] text-[#011C43] transition duration-500 lg:text-[24px]">Home</Link>
                <AnchorLink href="#Services">Services</AnchorLink>
                <AnchorLink href="#Pricing">Pricing</AnchorLink>
                <AnchorLink href="#Projects">Projects</AnchorLink>
                <AnchorLink href="#Contact">Contact</AnchorLink>
                </div>
            </div>
        )}
    </nav>
  )
}

export default Navbar;
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../../public/PEACE-PELVIC-HEALTH3.svg";
import { SelectedPage } from "../../../shared/types";
import Image from "next/image"
import instagram from "../../../public/instagram.svg"
import facebook from "../../../public/facebook.svg"
import google from "../../../public/google.svg"
import yelp from "../../../public/yelp.svg"
import Link from "next/link";
import { MdOutlineFax } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGoogle } from 'react-icons/ai';
import { SiYelp } from "react-icons/si"


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-[#003a47] py-6 md:py-3 lg:py-10">
        <div className="text-[#f3dfc1] justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-0 lg:mt-0 w-2/3 md:w-1/3 md:mt-0">
                <Image className="h-[80px] w-[80px] lg:h-[90px] lg:w-[90px]" src={Logo} alt="logo" width={60} height={60}/>
                <p className="my-5 lg:text-[24px]">©2023 Peace Pelvic Health, PLLC All Rights Reserved.</p>
                <a target="_blank" rel="noreferrer" href="https://www.cristianvargas.com" className="font-thin text-[12px] lg:text-[18px] hover:text-[#dea54b] transition duration-500">Designed and Developed by Creative Forge</a>
            </div>
            <div className="gap-5 mt-10 basis-1/4 md:mt-10 flex ml-[-2px] mb-[10px]">
                <a className="hover:opacity-40 transition duration-500" rel="noreferrer" target="_blank" href="https://www.instagram.com/peace.pelvic.health/">
                    <AiOutlineInstagram className="h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" rel="noreferrer" target="_blank" href="https://yelp.com">
                    <SiYelp className="h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" rel="noreferrer" target="_blank" href="https://www.google.com/search?q=Peace+Pelvic+Health&stick=H4sIAAAAAAAA_-NgU1I1qDBKMrY0Mk81t0g0S0lKNkmxMqgwTzNNTDawNE8xNTFIS7ZIXsQqHJCamJyqEJCaU5aZrOCRmphTkgEAA7_6Gj8AAAA&hl=en-US&mat=CU8wrOJJidJTElcBpsFACzkNioDKxbvQNk0GsHOIc8C0wC1KDicA_18wXxXeN_vFMqweMB1FmE-pXY0fq_nZlZy8fYQg751X8_TnOxeK1i5rouOKIfcGZqFR7hBb4av9xuk&authuser=0&ved=2ahUKEwivjouh6KL_AhWUrYkEHVDGDqcQ-MgIegQIIBAe">
                    <AiOutlineGoogle className="h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"/>
                </a>
                <a className="hover:opacity-50 transition duration-500" rel="noreferrer" target="_blank" href="https://www.facebook.com/people/Peace-Pelvic-Health/100093041915068/">
                    <AiOutlineFacebook className="h-[40px] w-[40px] md:h-[40px] md:w-[40px] lg:h-[50px] lg:w-[50px]"/>
                </a>             
            </div>

            <div className="lg:mt-0 mt-10 md:ml-[-10px] md:mr-10 flex-col font-thin md:mt-5">
                <h4 className="text-[#f3dfc1] font-bold lg:text-[25px]">Additional Links</h4>
                {/* <div>
                    <Link className="hover:text-[#dea54b] transition duration-500 underline lg:text-[24px]" href="/Patients">
                        New Patients
                    </Link>
                </div> */}
                <div>
                    <Link className="hover:text-[#dea54b] transition duration-500 underline lg:text-[24px]" href="/FAQ">
                        FAQ
                    </Link>
                </div>
                {/* <div>
                    <Link className="hover:text-[#dea54b] transition duration-500 underline lg:text-[24px]" href="/Diversity">
                        Diversity
                    </Link>
                </div> */}
                <div>
                    <Link className="hover:text-[#dea54b] transition duration-500 underline lg:text-[24px]" href="#">
                        Good Faith Estimate
                    </Link>
                </div>
                <div>
                    <Link className="hover:text-[#dea54b] transition duration-500 underline lg:text-[24px]" target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1Ofia-LS1v3Rcmv5H8Mdqd-kejPmeAbML/view?usp=sharing">
                        Privacy & Procedures
                    </Link>
                </div>
            </div>
            
            <div className="mt-10 md:mt-5 lg:mt-0">
                <h4 className="text-[#f3dfc1] font-bold mb-2 lg:text-[25px]">Contact</h4>
                <div className="flex gap-2">
                    <a href="mailto:contact@peacepelvichealth.com" className="underline-none transition duration-500 hover:text-[#dea54b]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-[#dea54b] transition duration-500 w-6 h-6 lg:h-8 lg:w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <p className="mt-2 font-thin lg:text-[24px]"></p>
                    </a>                
                    <a href="tel:773-694-4030" className="underline-none transition duration-500 hover:text-[#dea54b]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:text-[#dea54b] transition duration-500 w-6 h-6 lg:h-8 lg:w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        <p className="mt-2 font-thin lg:text-[24px]"></p>
                    </a>
                    <a href="tel:773-453-3866"> 
                        <MdOutlineFax className="h-6 w-6 underline-none transition duration-500 hover:text-[#dea54b]"/>
                    </a>
                </div>
                {/* Address Here */}
                {/* <p className="mt-3 font-thin lg:text-[24px]">9 S Fairview Ave.</p>
                <p className="font-thin lg:text-[24px]">Park Ridge, IL 60068</p> */}
            </div>
        </div>
    </footer>
  )
}

export default Footer;
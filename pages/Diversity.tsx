import React from 'react'
import Layout from "./scenes/layout"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image'
import DiversityGraphic from "../public/DiversityGraphic.svg"
import NataliaGraphic from "../public/NataliaAvelar.svg"

const Diversity = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Patients);

  return (
    <section className='bg-[#fffcf2]'>
        <Head>
            <title>
                Diversity | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
                name="description"
                content="Peace Pelvic Health is dedicated to providing pelvic education and care for everyone regardless of their race, ethnicity, religion, gender, or sexual orientation."
                key="desc"
            />
        </Head>
        <Layout setSelectedPage={setSelectedPage}>
        <div
        id='Benefits'
        className='mx-auto min-h-full w-5/6 py-[50px] md:py-[15px] md:mb-[80px] lg:py-[60px]'
        >
        <motion.div 
            
            >
                {/* Image and Main Header Here */}
                <motion.div 
                className="md:flex w-full items-center justify-center mt-[100px] md:mt-[45px] md:h-5/6"
                initial="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                        {/* Image Here */}
                    <div className="flex basis-3/5 justify-center md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[170px]">
                        <Image src={DiversityGraphic} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                    </div>
                    {/* Natalia Header here */}
                    <div className="z-10 md:mt-[180px] mt-10 md:basis-5/6">
                        {/* Natalia Headings Here */}
                        <motion.div 
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity:0, x:-50},
                            visible: { opacity: 1, x: 0},
                        }}
                        >
                           <h2 className="text-[#160F29] text-4xl tracking-tight md:text-4xl lg:text-6xl"><span></span>Diversity & Inclusion</h2>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            Peace Pelvic Health is committed to treating clients who are transgender and have undergone surgical procedures. We can help patients with post surgical dilation and stretching as well as awareness of how to mobilize their pelvic floor muscles after surgery. We support your right to be who you want to be.</p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            Peace Pelvic Health is committed to increasing knowledge about and availability of pelvic floor therapy for Black, LatinX, Asian Pacific American, and Indigenous People. P.E.A.C.E, in Peace Pelvic Health, stands for Pelvic Education and Care for Everyone. We believe in accessibility of quality pelvic floor or orthopedic treatment for all people regardless of gender, ethnicity/race, or sexual orientation. 
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </Layout>
</section>
)}

export default Diversity
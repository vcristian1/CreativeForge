import React from 'react'
import Layout from "./scenes/layout"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image'
import NewPatientGraphic from "../public/NewPatientGraphic.svg"
import NewPatientGraphic2 from "../public/NewPatientGraphic2.svg"

const Patients = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Patients);

  return (
    <section className='bg-[#fffcf2]'>
        <Layout setSelectedPage={setSelectedPage}>
            <Head>
            <title>
                New Patients | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
                name="description"
                content="At Peace Pelvic Health, we are eager to work with new patients to reach their goals and to improve their function and overall quality of life."
                key="desc"
            />
            
            </Head>
        <div
        id='Benefits'
        className='mx-auto min-h-full w-5/6 py-[50px] md:py-[90px]'
        >
        <motion.div 
            
            >
                {/* Image and Main Header Here */}
                <motion.div 
                className="md:flex w-full items-center justify-center mt-[100px] md:mt-[-25px] md:h-5/6 lg:mt-[25px]"
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
                    <div className="flex basis-3/5 justify-center md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[170px]">
                        <Image src={NewPatientGraphic} alt="patient-talking-to-therapist" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                    </div>
                    {/* Natalia Header here */}
                    <div className="z-10 md:mt-[180px] mt-10 md:basis-5/6 md:border-b-2 md:border-[#065a60]">
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
                           <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">New Patient {" "}<span className='text-[#065a60]'>Checklist</span></h2>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] md:mt-[40px] lg:mt-[80px]">
                            Thank you for choosing Peace Pelvic Health. We are eager to work with you to reach your goals and to improve your function and overall quality of life. At Peace Pelvic Health, you can expect to meet with one of our qualified physical therapists at the time of your initial examination who will take the time to learn about what is bringing you to therapy, set individualized goals for your plan of care, and set you on the path towards recovery and wellness. Together with your physical therapist, you will come up with a treatment plan that works for you.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Image and Main Header Here for "What You'll Need" section*/}
                <motion.div 
                className="md:mb-[-25px] md:flex w-full items-center justify-center mt-[100px] md:h-5/6 lg:mt-[100px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    {/* Natalia Header here */}
                    <div className="z-10 md:mt-[125px] mt-10 md:basis-5/6 md:mb-[25px]">
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
                            <h2 className="text-4xl tracking-tight mb-[50px] text-[#160F29] md:text-4xl lg:text-6xl">What You{"'ll "}<span className='text-[#065a60]'> Need</span></h2>
                            <ul>
                                <li>
                                <p className="font-thin my-4 md:my-3 text-[18px] md:text-[21px] lg:text-[30px] md:mt-[40px] lg:mt-[80px]">
                                &#9702; Driver{"'"}s License or Photo ID</p>
                                </li>
                                <li>
                                <p className="font-thin my-4 md:my-3 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                &#9702; Insurance Card</p>
                                </li>
                                <li>
                                <p className="font-thin my-4 md:my-3 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                &#9702; Prescription from physician for physical therapy</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                        {/* Image Here */}
                    <div className="flex basis-3/5 justify-center mt-10 mb-[100px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[170px]">
                        <Image src={NewPatientGraphic2} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </Layout>
</section>
)}

export default Patients
import React from 'react'
import { SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Layout from './scenes/layout';
import Head from 'next/head';
import TreatmentsGraphic2 from "../public/TreatmentsGraphic2.svg"
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Treatments = ({ setSelectedPage }: Props) => {
  return (
    <section className='bg-[#fffcf2]'>
        <Layout setSelectedPage={setSelectedPage}>
            <Head>
            <title>
                Treatments | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
                name="description"
                content="Peace Pelvic Health offers a variety of treatment options for pelvic and orthopedic conditions. We help patients with their most basic yet most private functions concerning bladder, bowel, and sexual health."
                key="desc"
            />
            </Head>
            <section id="Treatments" className="gap-16 bg-treatmentspage4 md:bg-treatmentspage1 lg:bg-treatmentspage2 py-10 md:h-full md:w-full">
                {/* Image and Main Header Here */}
                <motion.div 
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    {/* Main Header Here */}
                    <div className="z-10 mt-[250px] md:mt-44 h-[525px] lg:h-[740px] md:h-[520px] w-full lg:mt-[260px]">
                    {/* Headings Here */}
                    <motion.div 
                    className="md:-mt-20 lg:mt-[125px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50},
                        visible: { opacity: 1, x: 0},
                    }}
                    >
                        <h1 className="ml-1 md:ml-1 mt-8 text-[45px] md:text-[55px] lg:text-[60px] md:mt-[120px]">
                        Treatments
                        </h1>
                        <p className='w-4/5 font-thin ml-1 md:ml-1 mt-8 md:mb-[50px] mb-[50px] text-[20px] md:text-[22px] lg:text-[30px]'></p>
                        <AnchorLink href='#Contact' className="mt-2 rounded-md bg-[#dea54b] px-10 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#F3DFC1] hover:text-[#160F29] transition duration-500 ml-1">Book Appointment</AnchorLink>
                    </motion.div>
                    </div>
                    {/* Image Here */}
                    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                        {/* <Image src={HomePageGraphic} alt="home-page-graphic" /> */}
                    </div>
                </motion.div>
            </section>

            {/* Container for How We Treat, Peace Treatments, Dry Needling, Orthopedic Manual Therapy, Joint Mobilization, RUI, Dynamic Cupping Header(s) and Image(s) Here */}
            <div id='Benefits' className='mx-auto min-h-full w-5/6 py-[40px]'>
                <motion.div>
                    {/* How We Treat Header Here */}
                    <motion.div 
                    className="w-full items-center justify-center mt-[50px] md:h-5/6 md:mt-[80px] lg:mt-[150px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.25, duration: .5 }}
                    variants={{
                    hidden: { opacity: 0, x: -90 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">How We {" "}<span className='text-[#065a60]'>Treat Patients</span></h2>
                        <p className="font-thin my-7 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px] md:mt-[50px]">
                        At Peace Pelvic Health, we specialize in providing personalized, one-on-one treatments with our expert therapist who specializes in pelvic health and orthopedics. Our approach is patient-centered and trauma-informed, ensuring that you feel supported  during your treatments.</p>                    
                        <p className="font-thin my-7 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[40px]">Our goal is to help you reduce pain and dysfunction, and to educate you on your condition and your body. We believe in empowering our patients with the tools and skills they need to live their lives to the fullest potential.</p>
                        <p className="font-thin my-7 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[40px] md:mb-[70px]">We look forward to helping you achieve optimal pelvic health and orthopedic function. Contact us today to schedule an appointment and begin your journey towards greater well-being!</p>
                    </motion.div>
                </motion.div>
            </div>
            <div id="Contact" className='w-full'>
                <div className="relative isolate overflow-hidden bg-[#246a73] px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <div className="mb-14 md:mb-[80px] mx-auto max-w-md text-center lg:mt-[90px] lg:text-center">
                        <h2 className="font-bold tracking-tight text-[#F3DFC1] text-[28px] md:text-[30px] lg:text-[48px]">Peace Guaranteed</h2>
                        <p className="font-thin text-[20px] md:text-[22px] lg:text-[30px] mt-6 tracking-tight text-[#F3DFC1]">Conversation and a therapeutic alliance with your physical therapist, are arguably the most critical and encouraging parts of the therapy process. If you agree, click below!</p>
                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <Link href='/Contact' className="mt-2 rounded-md bg-[#dea54b] px-10 py-3 lg:px-12 lg:py-4 lg:text-[24px] font-semibold text-[#160F29] hover:bg-[#F3DFC1] hover:text-[#160F29] transition duration-500 ml-1">Book Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Benefits' className='mx-auto min-h-full w-5/6 py-[40px]'>
                <motion.div>
                    {/* Image and Header for "Peace Treatments" section*/}
                    <motion.div 
                    className="md:flex w-full items-center justify-start md:h-5/6 lg:mt-[70px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        {/* List of Treatments container here */}
                        <div className="grid pt-8 text-left md:gap-16 md:grid-cols-2 z-10 md:mt-[140px]">
                            {/* List of Treatments here*/}
                            <motion.div 
                            className="mt-[50px] md:-mt-20 md:mb-[100px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl lg:text-6xl">Peace<span className='text-[#065a60]'> Treatments</span></h2>
                                <div>
                                    <ul className='mt-5 md:mt-12 lg:mt-[80px]'>
                                        <li>
                                        <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                        &#9702; Pelvic Floor Muscle Retraining</p>
                                        </li>
                                        <li>
                                        <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                        &#9702; Orthopedic Manual Therapy</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Therapeutic Exercise</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Relaxation and Breathing Techniques</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Pain and Neuroscience Education</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Bladder and/or Bowel Retraining</p>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                            {/* List of Treatments here*/}
                            <motion.div 
                            className="mt-[50px] md:-mt-20 md:mb-[100px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <div className='mt-[-70px] md:mt-0 lg:mt-0'>
                                    <ul className='mt-5 md:mt-[90px] lg:mt-[140px]'>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Biofeedback</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Coordination and Flexibility Training</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Postural Training</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Therapeutic Guidance and Recommendations on Outside Consultations</p>
                                        </li>
                                        <li>
                                            <p className="font-thin my-3 text-[18px] md:text-[21px] lg:text-[30px]">
                                            &#9702; Patient Education on Condition and Home Program</p>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            
        </Layout>
    </section>
  )
}

export default Treatments;

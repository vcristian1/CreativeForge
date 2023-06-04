import React from 'react'
import { SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Layout from './scenes/layout';
import Head from 'next/head';
import NataliaGraphic from "../public/NataliaAvelar.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (

    <section className='bg-[#fffcf2]'>
        <Layout setSelectedPage={setSelectedPage}>
            <Head>
            <title>
                About | Peace Pelvic Health
            </title>
            <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
            <meta
                name="description"
                content="Peace Pelvic Health, established in 2023, is a niche physical therapy clinic specializing in pelvic and orthopedic conditions. We help patients with their most basic yet most private functions concerning bladder, bowel, and sexual health."
                key="desc"
            />
            
            </Head>
        <section
        id="Home"
        className="gap-16 xs:bg-aboutpage4 bg-aboutpage3 md:bg-aboutpage1 lg:bg-aboutpage2 py-10"
        >
            {/* Image and Main Header Here */}
            <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6 md:w-/6"
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
                <div className="z-10 mt-[250px] md:mt-44 h-[620px] lg:h-[740px] md:h-[520px] w-full lg:mt-[255px]">
                    {/* Headings Here */}
                    <motion.div 
                    className="md:-mt-[75px] lg:mt-[125px]"
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity:0, x:-50},
                        visible: { opacity: 1, x: 0},
                    }}
                    >
                        <p className='w-full ml-1 md:ml-[300px] md:mt-[-50px] mt-[-100px] mb-[125px] text-[22px] md:text-[24px] lg:text-[30px] lg:mt-[-175px] lg:ml-[350px]'>Ego says, {"'"}Once everything falls into place, I{"'"}ll feel peace{"'"}. Spirit says, {"'"}Find your peace, and then everything will fall into place{"'"}.</p>
                        <h1 className="ml-1 md:ml-1 mt-8 text-[50px] md:text-[55px] lg:text-[60px] md:mt-[120px]">
                        About Us
                        </h1>
                    </motion.div>
                </div>
                {/* Image Here */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[170px]">
                    {/* <Image src={HomePageGraphic} alt="home-page-graphic" /> */}
                </div>
            </motion.div>
        </section>
        <div
        id='Benefits'
        className='mx-auto min-h-full w-4/5 md:w-full lg:w-full py-[40px] md:py-[0px]'
        >
        <motion.div 
            
            >   
                <motion.div 
                className="w-full md:w-5/6 md:mx-[100px] lg:mx-[165px] md:flex md:h-5/6"
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
                    <div className="z-10 md:mt-[200px] md:mb-[-15px] mt-10 md:border-b-2 md:border-[#246a73]">
                        {/* Natalia Headings Here */}
                        <motion.div 
                        className="md:-mt-20 w-full md:mb-[75px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity:0, x:-50},
                            visible: { opacity: 1, x: 0},
                        }}
                        >
                           <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">Why Choose {" "}<span className='text-[#065a60]'>Peace Pelvic Health?</span></h2>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            We specialize in pelvic floor and orthopedic therapy, and have been providing quality care for over 10 years. Our team of experienced physical therapists are dedicated to helping our patients achieve their goals and improve their quality of life. We take the time to listen to each patient’s individual needs and develop a personalized treatment plan that is tailored to their specific goals. 
                            </p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            We are committed to providing the highest quality care possible and look forward to helping you reach your goals!
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Image and Main Header Here FOR MOBILE*/}
                <motion.div 
                className="md:flex w-full items-center justify-center md:h-5/6 md:mt-[50px] md:mb-[100px] lg:mb-[100px] lg:mt-[100px] md:w-5/6 md:mx-[100px] lg:mx-[165px]"
                initial="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity:0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    {/* Natalia Header here */}
                    <motion.div 
                     className="z-10 md:mt-[150px] mt-5 md:basis-5/6"
                     initial="visible"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5 }}
                     transition={{ delay: 0, duration: 0.5 }}
                     variants={{
                        hidden: { opacity:0, x:-50},
                        visible: { opacity: 1, x: 0},
                     }}
                    >
                        
                        {/* Natalia Headings Here */}
                        <div 
                        className="md:-mt-20"
                        >
                            
                            <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl">Natalia Avelar{" "}<span className='text-[#065a60]'> DPT, PRPC, Cert. MDT</span></h2>
                            <p className='font-thin my-7 text-[14px] md:text-[17px] lg:text-[26px] lg:mt-[80px]'>Owner, Pelvic and Orthopedic Specialist</p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            Natalia established Peace Pelvic Health, PLLC to provide a higher level of personalized care than is found in most high volume clinics. Natalia{"'"}s passion for treating patients stems from her drive to understand the patient as a whole and provide holistic care by understanding not only the physical manifestations of their symptoms but understanding the multiple factors affecting a person{"'"}s health, well-being, and current condition. With over ten years of experience working in outpatient clinics as part of hospital systems and private practice, Natalia is a dedicated professional with a passion for helping her patients overcome pelvic floor and orthopedic dysfunctions in order to achieve optimal health and wellness.
                            </p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            Natalia{"'"}s passion in pelvic and orthopedic care inspired her to pursue and obtain her Pelvic Rehabilitation Practitioner Certification (PRPC) in 2022 and Certification in Mechanical Diagnosis and Treatment (MDT) in 2017. These certifications alongside rigorous continuing education for evidence based practices have equipped her with the knowledge and skills needed to provide comprehensive care to her patients. Natalia is a firm believer that patients should receive care in a professional and supportive setting that allows them to share their experiences, express concerns, and enhance their quality of life by collaborating as a team.                             
                            </p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            In addition to her expertise in physical therapy, Natalia is trilingual, speaking English, Polish, and Spanish fluently. This has been an important asset throughout her career, allowing her to connect with a diverse range of patients and provide individualized care that meets their unique needs. Her compassionate and patient-centered approach has earned her a reputation as a skilled and trusted therapist among her colleagues and patients alike.
                            </p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                            When Natalia is not working, you can find her enjoying the outdoors with her family, gardening, paddle boarding, and enjoying live music.
                            </p>
                            <p className="font-thin my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[80px]">
                                <strong>Education:</strong> University of Illinois at Chicago, Doctorate of Physical Therapy<br />
                            </p>
                            <p className='mt-[-40px] mb-[100px] md:mt-[-40px] md:mb-[100px] lg:mt-[-40px] lg:mb-[50px] font-thin text-[18px] md:text-[21px] lg:text-[30px]'><strong>Certifications:</strong> <br></br>&bull; Pelvic Rehabilitation Practitioner Certification through Herman and Wallace Institute <br></br>&bull; Mechanical Diagnosis and Treatment through the Mckenzie Institute</p>

                        </div>
                        
                    </motion.div>
                    {/* Image Here */}
                    <div className="flex basis-3/5 justify-center md:z-10 md:mb-[190px] md:ml-40 md:justify-items-end lg:mt-[170px]">
                        <Image src={NataliaGraphic} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500 lg:mb-[180px]'/>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </Layout>
</section>
  )
}

export default Benefits
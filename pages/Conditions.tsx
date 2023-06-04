import React from 'react'
import {  SelectedPage } from '../shared/types';
import { motion } from 'framer-motion';
import Image from 'next/image'
import Layout from './scenes/layout';
import Head from 'next/head';
import ConditionsGraphic from "../public/ConditionsGraphic.svg"
import image1 from "../public/image1.png"
import image2 from "../public/image2.png";
import image3 from "../public/image3.png";
import image4 from "../public/image4.png";
import image5 from "../public/image6.png";
import image6 from "../public/image5.png";
import image7 from "../public/image7.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Conditions = ({ setSelectedPage }: Props) => {
  return (
    <section className='bg-[#fffcf2]'>
        <Layout setSelectedPage={setSelectedPage}>
            <Head>
                <title>
                    Conditions | Peace Pelvic Health
                </title>
                <link rel="icon" type="image/svg+xml" href="/PEACE-PELVIC-HEALTH3.svg" />
                <meta
                    name="Conditions"
                    content="Pelvic floor physical therapy can provide a solution for pain and dysfunction associated with these pelvic floor or orthopedic conditions."
                    key="desc"
                />
            </Head>
            <div
            id='Benefits'
            className='mx-auto min-h-full w-5/6 py-[40px]'
            >
                <motion.div>
                {/* Image and Main Header Here */}
                <motion.div 
                className="md:flex w-full items-center justify-center md:h-5/6 mt-[140px] mb-[100px] md:mt-[50px] lg:mt-[60px]"
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
                    <div className="flex basis-4/5 justify-center mt-[50px] md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                        <Image src={ConditionsGraphic} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                    </div>
                    {/* Natalia Header here */}
                    <div className="z-10 md:mt-[180px] mt-10 md:basis-5/6 md:border-b-2 md:border-[#065a60]">
                        {/* Natalia Headings Here */}
                        <motion.div 
                        className="md:-mt-20 lg:mt-[10px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        variants={{
                            hidden: { opacity:0, x:-50},
                            visible: { opacity: 1, x: 0},
                        }}
                        >
                            <h2 className="text-4xl tracking-tight text-[#160F29] md:text-4xl lg:text-6xl lg:mb-[60px]">Conditions {" "}<span className='text-[#065a60]'>We Treat</span></h2>
                            <p className="font-thin my-8 md:my-14 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                            At Peace Pelvic Health, we are dedicated to providing solutions for pain and dysfunction associated with the below conditions. Many patients live for years with undiagnosed and untreated symptoms related to the below conditions, but we can help! If you have questions regarding your condition and if we treat it, please contact us.</p>
                        </motion.div>
                    </div>
                </motion.div>

                    {/* Image and main header here for Pregnancy Postpartum*/}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:h-5/6 lg:mt-[60px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        {/* Pregnancy Postpartum Header here */}
                        <div className="z-10 md:mt-[150px] mt-10 mb-[100px] md:basis-5/6 md:border-b-2 md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:mt-[-50px] md:mb-[140px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Pregnancy & Postpartum</h2>
                                <ul className='mb-[-80px]'>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Birth Preparation</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Back, Hip, and Pelvic Pain</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Sciatica</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Sacroiliac Joint Dysfunction</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Abdominal Pain</p>
                                    </li> 
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Diastasis Recti Abdominis (DRA)</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Perineal Pain and Tearing</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Pelvic Organ Prolapse</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Pubic Symphysis Pain</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; C-Section Pain and Recovery</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Scar Management</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Bladder & Bowel Issues during Pregnancy & Postpartum</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                        {/* Image Here */}
                        <div className="flex basis-4/5 justify-center mb-[140px] md:mb-[125px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image1} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                    </motion.div>

                    {/* Bladder Pain Image and Header */}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:h-5/6 md:mt-[10px] lg:mt-[30px] lg:mb-[200px]"
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
                        <div className="flex basis-4/5 justify-center md:mb-[120px] md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image6} alt="bladder-pain" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                        {/* Bladder Pain Header here */}
                        <div className="z-10 md:mt-[125px] mb-[100px] mt-10 md:basis-5/6 md:border-b-2 md:mb-[125px] md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:mt-[-130px] md:mb-[60px] lg:mt-[50px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Bladder Health</h2>
                                <ul>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Urinary Urgency</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Urinary Leakage (Stress Incontinence, Urge Incontinence)</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Urinary Retention</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Frequency Issues & Overactive Bladder Syndrome</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Painful Bladder Syndrome</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Difficulty Emptying Bladder</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Bladder Prolapse</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Chronic Urinary Tract Infections</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Post-Surgical (ie: Bladder Prolapse Repair)</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image and Header for Female Pelvic Pain */}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:mt-[-50px] md:h-5/6 lg:mt-[20px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <div className="z-10 md:mt-[180px] mt-10 md:basis-5/6 md:border-b-2 md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:-mt-60 md:mb-[60px] lg:mt-[-120px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Female Pelvic Pain</h2>
                                <ul>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Chronic Pelvic Pain</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Vulvodynia</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Pudendal Neuralgia</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Endometriosis</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Coccyx/Tailbone Pain</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Post-Radiation for Gynecologic Cancers</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Pain and Fear of Gynecologic Exams</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Image Here */}
                        <div className="flex basis-4/5 justify-center mb-[150px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image3} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                        <div id='Bowel'></div>
                    </motion.div>

                    {/* Image and Header for Bowel Pain */}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:h-5/6 md:mt-[60px] lg:mt-[30px]"
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
                        <div className="flex basis-4/5 justify-center md:mb-[315px] md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image5} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                        <div className="z-10 md:mt-[125px] mt-10 mb-[150px] md:basis-5/6 md:border-b-2 md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:-mt-60 md:mb-[60px] lg:mt-[-25px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Bowel Health</h2>
                                <ul>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Constipation</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Rectocele</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Rectal Prolapse</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Fecal/Anal Incontinence (Leakage)</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Fecal Urgency</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Hemorrhoids</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Anal Fissure</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Chronic Bloating and Abdominal Pain</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Anismus</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Post-surgical (ie Prolapse Repair, Hemorrhoidectomy)</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Image and main header here for Sexual Health*/}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:mt-[-120px] md:h-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <div className="z-10 md:mt-[180px] mt-24 md:basis-5/6 md:border-b-2 md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:-mt-60 md:mb-[60px] lg:mt-[-120px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Sexual Health</h2>
                                <ul>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Dyspareunia/Painful Sex
                                    </p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Vulvodynia/Vulvar Pain</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Vaginismus</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Persistent Genital Arousal Disorder (PGAD)</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Painful Orgasm</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Anorgasmia</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Post-Surgical (ie hysterectomy, salpingo-oopherectomy)</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Image Here */}
                        <div className="flex basis-4/5 justify-center mb-[150px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image2} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                    </motion.div>

                    {/* Orthopedic Concerns Image and Header */}
                    <motion.div 
                    className="md:flex w-full items-center justify-center mb-[150px] md:h-5/6 md:mt-[-110px] lg:mb-[200px]"
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
                        <div className="flex basis-4/5 justify-center md:z-10 md:mr-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image7} alt="bladder-pain" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                        {/* Orthopedic Concerns Header here */}
                        <div className="z-10 md:mt-[125px] lg:mb-[100px] mt-10 md:basis-5/6 md:border-b-2 md:mb-[125px] md:border-[#065a60]">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:-mt-5 md:mb-[70px] lg:mt-[50px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Orthopedic Conditions</h2>
                                <ul>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Spinal Pain (Neck, Upper and Lower Back)</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] ml-10 md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &bull; Mechanical Diagnosis and Treatment (MDT)</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Sciatica or Lumbar Radiculopathy</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Hip Pain</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Cervical Radiculopathy</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Knee Pain</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Shoulder Pain</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Osteoarthritis</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Inquire about Post-Operative Services for Orthopedic Conditions</p>
                                    </li>
                                </ul>
                            </motion.div>
                            
                        </div>
                    </motion.div>

                    {/* Male Health Image and Header */}
                    <motion.div 
                    className="md:flex w-full items-center justify-center md:h-5/6 md:mt-[-110px] lg:mt-[60px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        
                        {/* Male Health here */}
                        <div className="z-10 md:mt-[60px] mt-10 mb-[50px] md:basis-5/6">
                            {/* Headings Here */}
                            <motion.div 
                            className="md:mt-[-150px] md:mb-[60px] lg:mt-[-25px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            variants={{
                                hidden: { opacity:0, x:-50},
                                visible: { opacity: 1, x: 0},
                            }}
                            >
                                <h2 className="text-4xl tracking-tight text-[#160F29] mb-[50px] mt-[50px] md:text-4xl md:mb-[50px] lg:text-6xl lg:mb-[60px]">Men{"'"}s Health</h2>
                                <ul>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Chronic Pelvic Pain/Chronic Prostatitis 
                                    </p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Pudendal Neuralgia 
                                    </p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Urinary Incontinence</p>
                                    </li>
                                    <li>
                                    <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                    &#9702; Post-void dribbling</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Overactive Bladder</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Post-prostatectomy Urinary or Sexual Dysfunctions</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Painful Urination/Bowel Movements</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Bowel concerns listed in <AnchorLink className="underline" href="#Bowel">Bowel Health</AnchorLink></p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Pain during or after ejaculation</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Penile, Scrotal or Testicular Pain</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Hernias</p>
                                    </li>
                                    <li>
                                        <p className="font-thin my-4 text-[18px] md:text-[21px] lg:text-[30px] lg:mt-[15px]">
                                        &#9702; Anorectal Pain (Proctalgia Fugax)</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                        {/* Image Here */}
                        <div className="flex basis-4/5 justify-center mb-[100px] md:z-10 md:ml-40 md:mt-16 md:justify-items-end lg:mt-[140px]">
                            <Image src={image4} alt="home-page-graphic" className='rounded-[20px] hover:saturate-150 transition duration-500'/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Layout>
    </section>
  )
}

export default Conditions
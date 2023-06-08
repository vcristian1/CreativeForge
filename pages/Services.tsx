import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import Head from 'next/head';
import image1 from "../public/service-1.svg";
import image2 from "../public/service-2.svg";
import image3 from "../public/service-3.svg";
import image4 from "../public/service-4.svg";
import image5 from "../public/service-5.svg";
import image6 from "../public/service-6.svg";
import jackpot from "../public/call-image-1.svg";
import { motion }  from "framer-motion"


const Services = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Blog);

  return (
    <div className='bg-slate-50 w-full'>
      <Layout setSelectedPage={setSelectedPage}>
        <Head>
            <title>
                Services | Creative Forge
            </title>
            <link rel="icon" type="image/svg+xml" href="/HomePageGraphic.svg" />
            <meta
                name="description"
                content="Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive growth"
                key="desc"
            />
        </Head>
        <motion.div 
         className="mb-[-150px] md:px-36 md:pb-0 md:flex relative isolate overflow-hidden bg-slate-50 px-6 pt-16 sm:px-16 md:pt-8 lg:flex"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: .5, duration: 1 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
          }}
        >
            <div className="mb-14 mt-[130px] md:mt-[200px] lg:mt-[300px] mx-auto max-w-md text-center lg:text-center md:text-left">
                <h2 className="tracking-tight text-[#160F29] text-4xl md:text-[38px] lg:text-5xl text-center font-bold">Our Services</h2>
                <p className="mt-5 text-center text-[20px] md:text-[20px] lg:text-[32px] md:mt-[50px]">Our website development services are tailored to deliver value for your business. From simple platform implementations to complete redesigns, we bring multiple teams together to build a solution that works for you.</p>
            </div>
            <div className='md:mt-[90px] lg:mt-[250px]'>
                <Image src={jackpot} className="md:h-18 md:w-18 mb-[75px] lg:h-22 lg:w-22" alt="image" />
            </div>
        </motion.div>
        <article className="w-full mx-auto md:w-5/6 lg:w-5/6 px-6 py-36 md:mt-[-150px]">
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <motion.div 
                className="flex mt-[50px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    <Image className="lg:h-36 lg:w-36 mt-2 md:mt-[-8px] lg:mt-[-30px]" src={image2} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-3xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">SEO Optimization</h2>
                </motion.div>
                <motion.div 
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    <p className="font-bold my-10 text-[20px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is SEO?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                    <p className="font-bold my-10 text-[20px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is SEO important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                </motion.div>
            </div>
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <motion.div 
                className="flex mt-[100px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    <Image className="lg:h-36 lg:w-36 md:mt-[-6px] lg:mt-[-30px]" src={image1} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">Web Design</h2>
                </motion.div>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: .5, duration: 1 }}
                variants={{
                hidden: { opacity: 0, x:-50},
                visible: { opacity: 1, x: 0},
                }}
                >
                    <p className="font-bold my-10 text-[20px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is Web Design?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Web design is the process of creating websites. It involves the use of various technologies such as HTML, CSS, JavaScript, and other web development tools to create a visually appealing and functional website.</p>
                    <p className="font-bold my-10 text-[20px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is Web Design important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Web design is important for businesses because it helps them create an online presence that can be used to reach out to potential customers and build relationships with them. A well-designed website can also help businesses increase their visibility on search engines, which can lead to more traffic and sales. Additionally, a well-designed website can help businesses establish credibility and trust with their customers.</p>
                </motion.div>
            </div>
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <div
                >
                    <motion.div 
                    className="flex mt-[100px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <Image className="lg:h-36 lg:w-36 mt-3 md:mt-[-8px] lg:mt-[-30px]" src={image4} alt='image'/>
                        <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">Website Hosting</h2>
                    </motion.div>
                    <motion.div 
                    className="w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is Website Hosting?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Website hosting is a service that allows businesses to store their website on a server, making it accessible to the public via the internet.</p>
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is Website Hosting important for businesses?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">It is important for businesses to have a hosted website with an SSL (Secure Sockets Layer) because it provides an extra layer of security for sensitive data, such as credit card information and passwords. An SSL certificate also helps to build trust with customers by showing that the website is secure and legitimate.</p>
                    </motion.div>
                </div>
            </div>
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <div
                >
                    <motion.div 
                    className="flex mt-[100px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <Image className="lg:h-36 lg:w-36 mt-3 md:mt-[-10px] lg:mt-[-30px]" src={image5} alt='image'/>
                        <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">Website Maintenance</h2>
                    </motion.div>
                    <motion.div 
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is Website Maintenance?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Website maintenance is the process of keeping a website up-to-date and running smoothly. This includes updating content, fixing broken links, ensuring the website is secure, and making sure all features are working properly.</p>
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is Website Maintenance important for businesses?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Website maintenance is important for businesses because it helps to ensure that their website remains secure, reliable, and up-to-date. It also helps to improve user experience by providing visitors with a website that is easy to navigate and use. Additionally, regular website maintenance can help businesses stay competitive by keeping their website looking modern and attractive.</p>
                    </motion.div>
                </div>
            </div>
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <div
                >
                    <motion.div 
                    className="flex mt-[100px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <Image className="lg:h-36 lg:w-36 mt-4 md:mt-[6px] lg:mt-[-30px]" src={image6} alt='image'/>
                        <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">Accessibility & Responsiveness</h2>
                    </motion.div>
                    <motion.div 
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is Web Responsiveness & Web Accessibility?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Web Responsiveness and Accessibility is the practice of making sure that a website is designed to be accessible to all users, regardless of their device, browser, or ability. This includes making sure that the website is optimized for mobile devices, as well as ensuring that it can be used by people with disabilities.</p>
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is Web Accessibility & Web Responsiveness important for businesses?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">It is important for businesses to have a responsive and accessible website because it allows them to reach a wider audience and provide an enjoyable user experience for all visitors. Additionally, having an accessible website can help businesses comply with legal requirements such as the Americans with Disabilities Act (ADA).</p>
                    </motion.div>
                </div>
            </div>
            <div
            className='mx-[10px] md:mx-auto lg:mx-auto'
            >
                <div
                >
                    <motion.div 
                    className="flex mt-[100px] md:mt-[100px] lg:mt-[150px] w-full mx-auto space-y-4 text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <Image className="lg:h-36 lg:w-36 mt-4 md:mt-[-10px] lg:mt-[-30px]" src={image3} alt='image'/>
                        <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-3xl lg:text-[38px] lg:mb-[100px] md:ml-5 ml-3">Digital Marketing</h2>
                    </motion.div>
                    <motion.div 
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: .5, duration: 1 }}
                    variants={{
                    hidden: { opacity: 0, x:-50},
                    visible: { opacity: 1, x: 0},
                    }}
                    >
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">What is Digital Marketing?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Digital marketing is the use of digital channels such as websites, search engines, social media, email, and mobile applications to promote products and services. It is an effective way for businesses to reach their target audience and build relationships with customers.</p>
                        <p className="font-bold my-10 text-[18px] md:text-[20px] lg:text-[32px] lg:mt-[80px]">Why is Digital Marketing important for businesses?</p>
                        <p className="font-thin my-10 text-[18px] md:text-[20px] lg:text-[30px] lg:mt-[80px]">Digital marketing is important for businesses because it allows them to reach a larger audience, engage with customers more effectively, and measure the success of their campaigns in real-time. Digital Marketing allows businesses to track their campaigns in real-time and measure the success of their efforts. It also helps businesses save money by eliminating the need for traditional advertising methods such as print ads or television commercials.</p>
                    </motion.div>
                </div>
            </div>
        </article>
      </Layout>
    </div>
  )
}

export default Services;
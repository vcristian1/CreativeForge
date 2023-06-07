import React from 'react'
import Layout from './scenes/layout'
import { SelectedPage } from "../shared/types";
import { useState } from "react";
import Image from "next/image"
import author from "../public/author.svg"
import Head from 'next/head';
import Link from 'next/link';
import image1 from "../public/service-1.svg";
import image2 from "../public/service-2.svg";
import image3 from "../public/service-3.svg";
import image4 from "../public/service-4.svg";
import image5 from "../public/service-5.svg";
import image6 from "../public/service-6.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
         className="md:px-36 md:pb-0 md:flex relative isolate overflow-hidden bg-slate-50 px-6 pt-16 sm:px-16 md:pt-8 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: .5, duration: 1 }}
         variants={{
         hidden: { opacity:0, x:-50},
         visible: { opacity: 1, x: 0},
          }}
        >
            <div className="mb-14 md:mt-[200px] mx-auto max-w-md lg:mt-[90px] lg:text-center">
                <h2 className="font-bold tracking-tight text-[#160F29] text-[32px] md:text-[42px] lg:text-[55px]">Our Services</h2>
                <p className="font-thin text-[20px] md:text-[22px] lg:text-[30px] mt-6 tracking-tight text-[#160F29]">Our website development services are tailored to deliver value for your business. From simple platform implementations to complete redesigns, we bring multiple teams together to build a solution that works for you.</p>
            </div>
            <div className='md:mt-[90px]'>
            <Image src={jackpot} className="md:h-18 md:w-18 mb-[75px]" alt="image" />
            </div>
        </motion.div>
        <article className="w-full mx-auto md:w-5/6 lg:w-5/6 px-6 py-36 md:mt-[-150px]">
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image2} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">SEO Optimization</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is SEO important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is SEO?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image1} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">Web Design</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is Web Design important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is Web Design?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image4} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">Website Hosting</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is Website Hosting important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is Website Hosting?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image5} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">Website Maintenance</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is Website Maintenance important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is Website Maintenance?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image6} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">Web Responsiveness & Web Accessibility</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is Web Responsiveness & Web Accessibility important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is Web Responsiveness & Web Accessibility?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
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
                <div className="flex mt-[50px] md:mt-[75px] lg:mt-[100px] w-full mx-auto space-y-4 text-left">
                    <Image src={image3} alt='image'/>
                    <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px] md:ml-5 ">Digital Marketing</h2>
                </div>
                <div className="dark:text-gray-100">
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Why is Digital Marketing important for businesses?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO optimization is important for businesses because it helps them to increase their visibility online. By optimizing their website and content for search engines, businesses can ensure that they are appearing in the top search results when potential customers are searching for products or services related to their business. This increased visibility can lead to more website traffic, more leads, and ultimately more sales.</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">Additionally, SEO optimization helps businesses to build trust with potential customers. When a business appears in the top search results, it shows that they are an authority in their industry and that they have taken the time to optimize their website and content for search engine algorithms. This trust can help to convert potential customers into paying customers as they will be more likely to purchase from a business that they trust.</p>
                    <p className="font-bold my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">What is Digital Marketing?</p>
                    <p className="font-thin my-10 text-[18px] md:text-[21px] lg:text-[28px] lg:mt-[80px]">SEO stands for Search Engine Optimization. It is the process of optimizing a website to increase its visibility in search engine results pages (SERPs). SEO involves making changes to a website{"'"}s content, structure, and code to improve its ranking in search engine results. This includes optimizing titles, descriptions, keywords, and other elements that help search engines understand what the website is about</p>
                </div>
            </motion.div>
        </article>
      </Layout>
    </div>
  )
}

export default Services;
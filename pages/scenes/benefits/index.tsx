import React, { useState } from 'react'
import {  ClassType, FeedbackType, SelectedPage } from '../../../shared/types';
import { motion } from 'framer-motion';
import Image from 'next/image'
import image1 from "../../../public/service-1.svg";
import image2 from "../../../public/service-2.svg";
import image3 from "../../../public/service-3.svg";
import image4 from "../../../public/service-4.svg";
import image5 from "../../../public/service-5.svg";
import image6 from "../../../public/service-6.svg";
import HomePageGraphic2 from "../../../public/HomePageGraphic2.svg"
import peace from "../../../public/peace-pelvic-health.svg"
import colibri from "../../../public/colibri.svg"
import vtr from "../../../public/highvine.svg"
import { Box, Text, Heading, Container, Button } from 'theme-ui';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { keyframes } from '@emotion/react';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {

  const [tab, setTab] = useState({
    active: 'construction',
  });

  const handleTab = (tab: any) => {
    if (tab === 'construction') {
      setTab({
        ...tab,
        active: 'construction',
      });
    }
    if (tab === 'realestate') {
      setTab({
        ...tab,
        active: 'realestate',
      });
    }
    if (tab === 'health') {
      setTab({
        ...tab,
        active: 'health',
      });
    }
    if (tab === 'create') {
      setTab({
        ...tab,
        active: 'create',
      });
    }
  };

  return (
    <section
     className='bg-[#ffffff] mx-auto min-h-full w-full py-10 md:py-20'
     id='Services'
    >
        <motion.div 
        >
          {/* Image and Main Header Here */}
          <motion.div 
          className="mx-auto w-5/6 items-center justify-center md:h-5/6 md:mb-[50px]"
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
            <div className="z-10 md:mt-36 mt-[50px] text-center">
                {/* Headings Here */}
                <motion.div 
                className="md:mt-[-100px] md:px-[175px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity:0, x:-50},
                    visible: { opacity: 1, x: 0},
                }}
                >
                    <h2 className="tracking-tight text-[#160F29] text-[32px] md:text-[38px] lg:text-[48px] text-center font-bold">Our Expertise</h2>
                    <p className="mt-5 text-center text-[20px] md:text-[20px] lg:text-[31px] md:mt-[50px]">From designing to developing, we are committed at Creative Forge to building you a stunning website that drives your business forward.</p>
                </motion.div>
              </div>
              <div className='md:flex cols-3 mt-16 md:mt-[75px] md:space-x-4 lg:space-x-6 lg:mt-[100px]'>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image2} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left">
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">SEO Optimization</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">Get the most out of your SEO by working with a company who understands how Google indexes the web.</p>
                    <div className='space-x-4 lg:mt-4 mb-10'>
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image1} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left">
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">Web Design</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">We will design visually impressive and functional online experiences that are catered to your target audience.</p>
                    <div className='space-x-4 lg:mt-4 mb-10'>
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image4} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left">
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">Website Hosting & Domain</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">We will connect your website to a webhost, as well as configure and purchase your domain to keep your website safe and secure.</p>
                    <div className='space-x-4 lg:mt-4 mb-10'>
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='md:flex cols-3 mt-10 md:mt-[75px] md:space-x-4 md:mb-[125px] lg:space-x-6 lg:mt-[100px] lg:mb-[100px]'>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image5} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left">
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">Website Maintenance</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">We will offer you ongoing support after completion to keep your website running smoothly.</p>
                    <div className='space-x-4 lg:mt-4 mb-10'>
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image6} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left">
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">Web Responsiveness & Web Accessibility</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">We will develop a website that is responsive on multiple screen sizes, and is ADA compliant.</p>
                    <div className='space-x-4 lg:mt-4 mb-10'>
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
                <Image className='ml-[115px] md:ml-0 lg:ml-0 h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 rounded' src={image3} alt='image2'/>
                <div className="w-full text-center md:text-left lg:text-left" >
                  <div className="card-body">
                    <h4 className="mb-2 mt-4 text-[20px] md:text-[16px] lg:text-[24px] lg:mt-[-9px] font-bold">Digital Marketing</h4>
                    <p className="text-[18px] mb-2 md:text-[14px] lg:text-[22px]">We will set up your business profiles on your requested social media platforms, and post your requested content daily.</p>
                    <div className='space-x-4 lg:mt-4 mb-10' id="Pricing">
                      <a href="/Services" className="text-[#56AEFF] hover:opacity-50 transition duration-500 text-[16px] md:text-[14px] lg:text-[20px]">Learn More <span className='text-[#56AEFF]'>{">"}</span></a>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>

          <section className="bg-slate-100" >
            <div className="py-8 px-4 md:mx-[100px] md:mt-[-50px] mx-auto lg:mx-[200px] max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 md:px-[125px] md:mt-[50px] md:mb-[50px]">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Pricing</h2>
                    <p className="mt-5 text-center text-[20px] md:text-[20px] lg:text-[31px] md:mt-[50px]">View our various monthly and annual plans below to determine which service best meets the needs of your business.</p>
                </div>
                <div className="flex space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <div className="flex flex-col p-6 mx-auto  text-center text-gray-900 bg-white rounded-xl border-slate-100 border-2 shadow xl:p-8">
                        <h3 className="mb-4 text-2xl font-semibold">Startup Pack</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">$14.99</span>
                            <span className="text-[#011C43] dark:text-gray-400">/mo</span>
                        </div>
                        
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>A custom website tailored to your business with up to 5 pages of content</span>
                            </li>
                            <li className="flex items-center space-x-3">
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>1 revision post website completion</span>
                            </li>
                            <li className="flex items-center space-x-3">
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Ongoing website Maintenance & Support</span>
                            </li>
                            <li className="flex items-center space-x-3">
                        
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Search engine optimization & visibility</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Social Media posting (1 post per account, per day)</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Web Hosting and Domain Configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Fully Responsive, and Web Accessible</span>
                            </li>
                            <li className="flex items-center space-x-3">
                              <AiOutlineClose />
                              <span>E-Commerce functionality</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <AiOutlineClose />
                                <span>Blog functionality</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <AiOutlineClose />
                                <span>Booking functionality</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <AiOutlineClose />
                                <span>User Authentication</span>
                            </li>
                        </ul>
                        <a href="#" className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1">Get started</a>
                    </div>
                    
                    <div className="flex flex-col p-6 mx-auto  text-center text-gray-900 bg-white rounded-xl border-slate-100 border-2 shadow">
                        <h3 className="mb-4 text-2xl font-semibold">Standard Pack</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">$18.99</span>
                            <span className="text-[#011C43] dark:text-gray-400">/mo</span>
                        </div>
                        
                        <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                          
                          <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>A custom website tailored to your business with up to 10 pages of content</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>1 revision post website completion</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Ongoing website Maintenance & Support</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Search engine optimization & visibility</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Social Media posting (1 post per account, per day)</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Web Hosting and Domain Configuration</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Fully Responsive, and Web Accessible</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>E-Commerce functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Blog functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <AiOutlineClose />
                              <span>Booking functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <AiOutlineClose />
                              <span>User Authentication</span>
                          </li>
                        </ul>
                        <a href="#" className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1">Get started</a>
                    </div>
                    
                    <div className="flex flex-col p-6 mx-auto  text-center text-gray-900 bg-white rounded-xl border-slate-100 border-2 shadow">
                        <h3 className="mb-4 text-2xl font-semibold">Premium Pack</h3>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">$24.99</span>
                            <span className="text-[#011C43] dark:text-gray-400">/mo</span>
                        </div>
                        
                        <ul role="list" className="mb-8 space-y-4 text-left">
                          <li className="flex items-center space-x-3">
                          
                          <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          <span>A custom website tailored to your business with up to 20 pages of content</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>1 revision post website completion</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Ongoing website Maintenance & Support</span>
                          </li>
                          <li className="flex items-center space-x-3">
                      
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Search engine optimization & visibility</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Social Media posting (2 posts per account, per day)</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Set up for Google, Yelp, Facebook, & Instagram business profiles</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Web Hosting and Domain Configuration</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Fully Responsive, and Web Accessible</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>E-Commerce functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Blog functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Booking functionality</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>User Authentication</span>
                          </li>
                          <li className="flex items-center space-x-3">
                              <svg className="flex-shrink-0 w-5 h-5 text-[#56AEFF] dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                              <span>Sign up form for email subscribers, and weekly newsletter</span>
                          </li>
                        </ul>
                        <a href="#" className="rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1">Get started</a>
                    </div>
                </div>
            </div>
          </section>

            {/* BENEFITS GRAPHICS AND DESCRIPTION HERE */}
            <motion.div 
             className='mt-[100px] mx-8 items-center justify-center gap-20 md:mt-[100px] md:flex'
             initial="visible"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
              hidden: { opacity: 0, x: 90 },
              visible: { opacity: 1, x: 0 },
            }}
            >
                {/* DESCRIPTION HERE */}
                <div className='mb-[60px] md:mb-[60px] lg:mb-16 md:mx-[75px] lg:mx-[135px]'
                id='Projects'>
                    {/* TITLE HERE */}
                    <div className='relative'>
                        <div className='mt-[100px] md:mt-[20px] lg:mb-[80px]'>
                            <motion.div
                             className='text-left'
                             initial="hidden"
                             whileInView="visible"
                             viewport={{ once: true, amount: 0.5 }}
                             transition={{ delay: 0.5, duration: 0.5 }}
                             variants={{
                               hidden: { opacity: 0, x: 90 },
                               visible: { opacity: 1, x: 0 },
                             }}
                            >
                              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Completed Projects</h2>
                                  <p className="mt-5 text-center text-[20px] md:text-[20px] lg:text-[31px] md:mt-[50px]">View some of our most recently completed projects by clicking an industry tab below.</p>
                              </div>
                            </motion.div>
                              <div className=''>
                                <motion.div 
                                  className='text-center space-x-8'
                                  initial="visible"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.5 }}
                                  transition={{ delay: 0.5, duration: 0.5 }}
                                  variants={{
                                    hidden: { opacity: 0, x: 90 },
                                    visible: { opacity: 1, x: 0 },
                                  }}
                                >
                                  <button
                                    onClick={() => handleTab('construction')}
                                    className={`${tab.active === 'construction' ? 'active' : ''} rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-white hover:opacity-30 transition duration-500 ml-1 md:ml-1`}
                                  >
                                    Construction
                                  </button>
                                  <button
                                    onClick={() => handleTab('realestate')}
                                    className={`${tab.active === 'realestate' ? 'active' : ''} rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1`}
                                  >
                                    Real Estate
                                  </button>
                                  <button
                                    onClick={() => handleTab('health')}
                                    className={`${tab.active === 'health' ? 'active' : ''} rounded-md bg-[#011C43] px-10 md:px-6 py-2 md:py-2 lg:px-10 lg:py-3 lg:text-[25px] text-[#ffffff] hover:opacity-30 transition duration-500 ml-1 md:ml-1`}
                                  >
                                    Health Care
                                  </button>
                                </motion.div>
                                <div>
                                  {tab.active === 'construction' && (
                                    <motion.div
                                     className='md:px-[100px] border-t-2 md:mt-[25px] border-[#011C43]'
                                     initial="visible"
                                      whileInView="visible"
                                      viewport={{ once: true, amount: 0.5 }}
                                      transition={{ delay: 0, duration: 1 }}
                                      variants={{
                                        hidden: { opacity: 0, x: 90 },
                                        visible: { opacity: 1, x: 0 },
                                      }}
                                    >
                                      <Image src={colibri} alt="tab image" className="md:mt-[50px]" />
                                      <h4 className='text-[20px] md:text-[22px] lg:text-[31px] md:mb-[10px] font-bold'>Objective</h4>
                                      <p className='md:mb-[10px] text-[20px] md:text-[20px] lg:text-[31px] '>Colibri needed a website that showcased their numerous years of experience, brand, and services. It was important to Colibri that they could be found easily on Google.</p>
                                    </motion.div>
                                  )}
                                  {tab.active === 'realestate' && (
                                  <motion.div
                                    className='md:px-[100px] border-t-2 md:mt-[25px] border-[#011C43]'
                                    initial="visible"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: 0, duration: 1 }}
                                    variants={{
                                      hidden: { opacity: 0, x: 90 },
                                      visible: { opacity: 1, x: 0 },
                                    }}
                                  >
                                    <Image src={vtr} alt="tab image" className="md:mt-[50px]"/>
                                    <h4 className='text-[20px] md:text-[22px] lg:text-[31px] md:mb-[10px] font-bold'>Objective</h4>
                                    <p className='md:mb-[10px] text-[20px] md:text-[20px] lg:text-[31px] '>Vargas Trihn Realty needed a website that showcased their brand and services as a newly starting practice. It was important to Peace Pelvic Health that they could be found on Google.</p>
                                  </motion.div>
                                  )}
                                  {tab.active === 'health' && (
                                    <motion.div
                                    className='md:px-[100px] border-t-2 md:mt-[25px] border-[#011C43]'
                                    initial="visible"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ delay: 0, duration: 1 }}
                                    variants={{
                                      hidden: { opacity: 0, x: 90 },
                                      visible: { opacity: 1, x: 0 },
                                    }}
                                    >
                                      <Image src={peace} alt="tab image" className="md:mt-[50px]"/>
                                      <h4 className='text-[20px] md:text-[22px] lg:text-[31px] md:mb-[10px] font-bold'>Objective</h4>
                                      <p className='md:mb-[10px] text-[18px] md:text-[18px] lg:text-[28px]'>Peace Pelvic Health needed a website that showcased their experience, brand, and services. It was important to Xavier and Angela Vargas that they could be found easily on Google.</p>
                                    </motion.div>                                  )}
                                </div>
                              </div>
                              
                        </div>
                    </div>
                </div>                
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Benefits

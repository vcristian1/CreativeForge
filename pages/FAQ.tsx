import React from 'react'
import Layout from "./scenes/layout"
import { useEffect, useState } from "react";
import { SelectedPage } from "../shared/types";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head  from 'next/head';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const FAQ = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.FAQ);

  return (
    <div className='bg-slate-50'>
        <Head>
            <title>
            FAQ | Creative Forge
            </title>
            <link rel="icon" type="image/svg+xml" href="/HomePageGraphic.svg" />
            <meta
            name="description"
            content="Creative Forge is a full service web design and development studio specializing in designing and developing custom and effective web applications for businesses and individuals that drive growth."
            key="desc"
            />
      </Head>
      <Layout setSelectedPage={setSelectedPage}>
          <section className="mx-4 py-[110px] md:mx-[105px] md:py-[100px] lg:mt-[100px]">
            <Link className="text-[26px] md:text-[32px] lg:text-[38px] hover:opacity-50 transition duration-500" href="/">↵</Link>
            <motion.div 
              className="py-8 px-4 lg:mx-12 mx-auto max-w-screen-xl sm:py-16 lg:px-6 md:mb-[-100px]"
              initial="visible"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={{
                  hidden: { opacity:0, x:-50},
                  visible: { opacity: 1, x: 0},
              }}
             >
                <h2 className="text-[#160F29] text-left mb-8 md:mb-10 text-4xl tracking-tight md:text-4xl lg:text-[52px] lg:mb-[100px]">Frequently Asked Questions</h2>
                <p className="w-full text-[#160F29] mb-[40px] mt-[40px] md:mb-[40px] md:mt-[25px] lg:mb-[50px] lg:mt-[-50px] font-thin text-[18px] md:text-[18px] lg:text-[32px]">Click on our most frequently asked questions below to learn more about Creative Forge{"'"}s processes and procedures.</p>
                <div className="grid pt-8 text-left border-t border-[#160F29] md:gap-16 md:grid-cols-1">
                    <div className='lg:mt-[100px]'>
                        <Accordion allowMultiple>
                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[32px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 lg:h-10 lg:w-10 text-[#56AEFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Am I able to cancel my monthly plan at any time?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' className='lg:h-6 lg:w-6' />
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px] lg:mt-5"pb={4}>
                                    Unfortunately no, all monthly plans are subject to a one year contractual term. This is due to the time and effort that is required of Creative Forge upfront to complete the project. The intial $12.99, $18.99, or $24.99 is not enough to compensate Creative Forge for that time and effort if it is lost due to a cancellation.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[32px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 lg:h-10 lg:w-10 text-[#56AEFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Is Creative Forge available 24/7 for Maintenance and Bug related requests?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px] lg:mt-5"pb={4}>
                                    Although we are not available 24/7, we are available to chat with you via email or phone anytime between 7:00 AM - 7:00 PM CST. 
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                                {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[32px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 lg:h-10 lg:w-10 text-[#56AEFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            Am I able to purchase my own domain, and give the neccesary information to Creative Forge?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px] lg:mt-5"pb={4}>
                                    Absolutely! Creative Forge is not interested in owning anything we have built for you post completion including the domain. We offer the service of purchasing and configuring the domain to the web host in case you are not interested in purchasing the domain yourself.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[32px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 lg:h-10 lg:w-10 text-[#56AEFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            How am I able to cancel my monthly or annual plan?
                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px] lg:mt-5"pb={4}>
                                    If you are subscribed to a monthly plan, you must have first completed the initial 12 months on your contract before cancelling. After paying for 12 months, you are automatically enrolled into a  {"'"}Month to Month{"'"} contract, and can cancel your subscription at any time. Once you have cancelled, you will have ownership of the website, and all other corresponding services such as: Maintenance, Social Media Posting, and Weekly Newsletter will cease. To begin the cancellation process, please give us a call at 773-706-5634
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>

                            <AccordionItem className='lg:mb-[100px] mb-10'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                        <h3 className="flex items-center mb-4 text-[18px] lg:text-[32px] font-medium text-gray-900">
                                            <svg className="flex-shrink-0 mr-2 w-5 h-5 lg:h-10 lg:w-10 text-[#56AEFF]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                            For Social Media posting, is Creative Forge creating the content to post or is that my responsibility?                                        </h3>
                                        </Box>
                                        {isExpanded ? (
                                        <AiOutlineMinus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        ) : (
                                        <AiOutlinePlus fontSize='16px' className='lg:h-6 lg:w-6'/>
                                        )}
                                    </AccordionButton>
                                    </h2>
                                    <AccordionPanel className="text-[#160F29] font-thin text-[18px] md:text-[18px] lg:text-[30px] lg:mt-5"pb={4}>
                                    For Social Media posting, Creative Forge before the end of the week should receive an email from you with the content you would like posted for the following week. However, we can also create the content for you at no additional charge as long as we are aware you will not be creating the content.
                                    </AccordionPanel>
                                </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </div>   
                </div>
            </motion.div>
          </section>
      </Layout>
    </div>
  )
}

export default FAQ